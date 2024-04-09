/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-nested-ternary */
import { FormControl, TextFieldProps, FormLabelProps, FormControlProps as MuiFormControlProps } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';
import { FocusEvent, ChangeEvent } from 'react';
import { get } from 'lodash';
import { FormControlProps } from '@/types';
import { MuiTextField, StyledFormLabel } from './CustomTextField.styles';
import { COLORS } from '@/theme';

export const CustomTextField = <T extends FieldValues>({
  name,
  errors,
  control,
  required = false,
  fullWidth = true,
  isFormControl = false,
  isUpload = false,
  onBlur,
  onChange,
  label,
  rules,
  formLabelProps,
  formControlProps = {},
  ...props
}: FormControlProps<T> &
  TextFieldProps & {
    width?: string;
    isUpload?: boolean;
    formLabelProps?: FormLabelProps;
    formControlProps?: MuiFormControlProps;
    rules?: any;
  }) => {
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);

  return (
    <FormControl
      fullWidth={fullWidth}
      sx={{
        ...(formControlProps.sx || {}),
      }}
      {...formControlProps}
    >
      <StyledFormLabel error={hasError} disabled={props.disabled} {...formLabelProps}>
        {label}
        {required && <span style={{ color: COLORS.RED }}>*</span>}
      </StyledFormLabel>
      {isFormControl ? (
        isUpload ? (
          <Controller
            name={name}
            control={control}
            render={({ field: { value: textValue, onBlur: onInputBlur, onChange: onInputChange, ...field } }) => (
              <MuiTextField
                {...field}
                error={hasError}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  onInputChange(e.target.files);

                  onChange?.(e);
                }}
                onBlur={(e: FocusEvent<HTMLInputElement, Element>) => {
                  onInputBlur();

                  onBlur?.(e);
                }}
                helperText={errorMessages?.message?.toString()}
                autoComplete="off"
                {...props}
              />
            )}
          />
        ) : (
          <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { value: textValue, onBlur: onInputBlur, onChange: onInputChange, ...field } }) => (
              <MuiTextField
                {...field}
                error={hasError}
                value={textValue || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const inputValue = e.target.value;

                  onInputChange({
                    target: {
                      value:
                        props.type === 'number' && // If the type is number, we need to convert the value to number
                        inputValue !== '' // If the value is empty, we don't need to convert it to number
                          ? +inputValue // If the value is not empty, we need to convert it to number
                          : inputValue, // Otherwise, we don't need to convert it to number
                      name,
                    },
                  });

                  onChange?.(e);
                }}
                onBlur={(e: FocusEvent<HTMLInputElement, Element>) => {
                  onInputBlur();

                  onBlur?.(e);
                }}
                helperText={errorMessages?.message?.toString()}
                autoComplete="off"
                {...props}
              />
            )}
          />
        )
      ) : (
        <MuiTextField name={name} onChange={onChange} onBlur={onBlur} {...props} />
      )}
    </FormControl>
  );
};
