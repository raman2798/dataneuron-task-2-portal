import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form';
import { TypeText } from '@/enums';

export type FormControlProps<T extends FieldValues> = {
  isFormControl?: boolean;
  errors?: FieldErrors<T>;
  control?: Control<T>;
  name: Path<T>;
};

export type CustomErrorProps = Error & {
  statusCode: number;
  message: string;
};

export type CustomPaginationProps = {
  page: number;
  pageSize: number;
};

export type CustomQueryProps = {
  page?: number;
  limit?: number;
  isDownload?: boolean;
  searchValue?: string;
  isEnabled?: boolean;
};

export type ValueProps = {
  value: string;
  text: string;
};

export type ActionFunctions = {
  [TypeText.ADD]?: () => void;
  [TypeText.EDIT]: () => void;
  [TypeText.VIEW]: () => void;
};
