import { TextFieldProps } from "@material-ui/core";

export interface IUseApplyProps {
  register: React.Ref<any>;
  errors: Record<string, any>;
}

export type ApplyProps = <T = any>(id: string) => TextFieldProps | T;

export const useApplyProps = ({ register, errors }: IUseApplyProps): ApplyProps => {
  return (id: string) => ({
    id,
    name: id,
    inputRef: register,
    error: !!errors[id]?.message,
    helperText: errors[id]?.message,
  });
};
