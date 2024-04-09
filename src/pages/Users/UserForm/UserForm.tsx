/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, Stack } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { get, isEqual, toUpper } from 'lodash';
import { FC, ReactElement, useEffect } from 'react';
import { CustomButton, CustomTextField } from '@/elements';
import { UserFormSchema, UserProps } from './UserForm.schema';
import { FONT } from '@/theme';
import { useCreateUser, useReadUserById, useUpdateUser } from '../Users.api';
import { ButtonText, TypeText } from '@/enums';
import { ActionFunctions } from '@/types';

const UserForm: FC = (): ReactElement => {
  const { state, search } = useLocation();

  const navigate = useNavigate();

  const searchParams = new URLSearchParams(search);

  const type = get(state, 'type') as TypeText;

  const userId = searchParams.get('id') || '';

  const buttonText = ButtonText[toUpper(type) as keyof typeof ButtonText];

  const isView = isEqual(type, TypeText.VIEW);

  const createUser = useCreateUser();

  const updateUser = useUpdateUser();

  const { data } = useReadUserById(userId);

  const user = get(data, 'data', {}) as UserProps;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserProps>({
    resolver: yupResolver(UserFormSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (!isEqual(type, TypeText.ADD)) {
      reset({
        firstName: get(user, 'name.first', ''),
        lastName: get(user, 'name.last', ''),
        email: get(user, 'email', ''),
      });
    }
  }, [user, reset, type]);

  const handleFormSubmit: SubmitHandler<UserProps> = (formData) => {
    const actions: ActionFunctions = {
      [TypeText.ADD]: () =>
        createUser.mutate({
          ...formData,
        }),
      [TypeText.EDIT]: () =>
        updateUser.mutate({
          data: formData,
          userId,
        }),
      [TypeText.VIEW]: () =>
        navigate(`?id=${userId}`, {
          state: { type: TypeText.EDIT },
        }),
    };

    const actionFunction = actions[type];

    if (actionFunction) {
      actionFunction();
    }
  };

  return (
    <Stack>
      <Box display="flex" alignItems="center" sx={{ pt: 2, pb: 4 }}>
        <Box display="flex" alignItems="center" justifyContent="flex-start" width="100%">
          <CustomButton
            variant="outlined"
            onClick={() => {
              navigate(-1);
            }}
            sx={{ width: '5rem', mb: 2 }}
          >
            Back
          </CustomButton>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <CustomButton variant="outlined" onClick={handleSubmit(handleFormSubmit)} sx={{ width: '5rem', mb: 2 }}>
            {buttonText}
          </CustomButton>
        </Box>
      </Box>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4} gap={2}>
            <CustomTextField
              autoFocus
              formLabelProps={{
                sx: {
                  fontSize: FONT.SIZES[16],
                  fontWeight: FONT.WEIGHT.SEMIBOLD,
                },
              }}
              type="text"
              name="firstName"
              isFormControl
              required
              control={control}
              errors={errors}
              placeholder="First"
              label="First Name"
              width="100%"
              InputProps={{
                readOnly: isView,
              }}
            />
          </Grid>
          <Grid item xs={6} md={4} gap={2}>
            <CustomTextField
              autoFocus
              formLabelProps={{
                sx: {
                  fontSize: FONT.SIZES[16],
                  fontWeight: FONT.WEIGHT.SEMIBOLD,
                },
              }}
              type="text"
              name="lastName"
              isFormControl
              required
              control={control}
              errors={errors}
              placeholder="Last"
              label="Last Name"
              width="100%"
              InputProps={{
                readOnly: isView,
              }}
            />
          </Grid>
          <Grid item xs={6} md={4} gap={2}>
            <CustomTextField
              autoFocus
              formLabelProps={{
                sx: {
                  fontSize: FONT.SIZES[16],
                  fontWeight: FONT.WEIGHT.SEMIBOLD,
                },
              }}
              type="email"
              name="email"
              isFormControl
              required
              control={control}
              errors={errors}
              placeholder="Email"
              label="Email Address"
              InputProps={{
                readOnly: isView,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default UserForm;
