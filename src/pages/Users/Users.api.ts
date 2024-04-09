import { useMutation, useQuery } from '@tanstack/react-query';
import { gt, size } from 'lodash';
import { apiEndpointsHelpers, clientHelpers, errorsHelpers } from '@/helper';
import { UserProps } from './UserForm/UserForm.schema';
import { Alert, alertActions, useAppDispatch } from '@/redux';
import { CustomErrorProps, CustomQueryProps } from '@/types';

const { createAlert } = alertActions;

const {
  users: { create, readAll, readById, updateById, search, getUserCounts },
} = apiEndpointsHelpers;

const { client } = clientHelpers;

const { handleErrors } = errorsHelpers;

export type UserPropsType = {
  data: UserProps;
  userId: string;
};

export const useCreateUser = () =>
  useMutation<unknown, CustomErrorProps, UserProps>({
    mutationFn: (data) => client.post(create(), data),
    onMutate: () =>
      useAppDispatch(
        createAlert({
          type: Alert.LOADER,
          isOpen: true,
        }),
      ),
    onSuccess: () =>
      useAppDispatch(
        createAlert({
          type: Alert.SUCCESS,
          isOpen: true,
          message: 'User create successfully',
          navigateLink: '/',
        }),
      ),
    onError: (error) => handleErrors(error),
  });

export const useReadAllUsers = ({ page = 1, limit = 10, isEnabled = true }: CustomQueryProps) =>
  useQuery({
    queryKey: ['readAllUsers', page, limit],
    queryFn: () => client.get(readAll(), { params: { page, limit } }),
    enabled: isEnabled,
  });

export const useReadUserById = (userId: string) =>
  useQuery({
    queryKey: ['readUserById', userId],
    queryFn: () => client.get(readById(userId)),
    enabled: !!userId,
  });

export const useUpdateUser = () =>
  useMutation<unknown, CustomErrorProps, UserPropsType>({
    mutationFn: (data) => client.put(updateById(data.userId), { ...data.data }),
    onMutate: () =>
      useAppDispatch(
        createAlert({
          type: Alert.LOADER,
          isOpen: true,
        }),
      ),
    onSuccess: () =>
      useAppDispatch(
        createAlert({
          type: Alert.SUCCESS,
          isOpen: true,
          message: 'User update successfully',
          navigateLink: '/',
        }),
      ),
    onError: (error) => handleErrors(error),
  });

export const useSearchUsers = ({ page = 1, limit = 10, searchValue }: CustomQueryProps) =>
  useQuery({
    queryKey: ['searchUsers', searchValue, page, limit],
    queryFn: () => client.get(search(), { params: { searchValue, page, limit } }),
    enabled: gt(size(searchValue), 2),
  });

export const useUserCounts = () =>
  useQuery({
    queryKey: ['readUserCounts'],
    queryFn: () => client.get(getUserCounts()),
  });
