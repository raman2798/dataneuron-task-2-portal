import { InferType, object, string } from 'yup';

export const UserFormSchema = object({
  firstName: string().default('').required('Required'),
  lastName: string().default('').required('Required'),
  email: string().email('Enter valid email').required('Required'),
});

export type UserProps = InferType<typeof UserFormSchema>;
