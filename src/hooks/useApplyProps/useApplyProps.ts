import { TextFieldProps } from "@material-ui/core";

export interface IUseApplyProps {
  register: React.Ref<any>;
  errors: Record<string, any>;
}

export type ApplyProps<K> = (id: keyof K) => TextFieldProps & { [key: string]: any };

export const useApplyProps = <K = any>({ register, errors }: IUseApplyProps): ApplyProps<K> => {
  return (key: keyof K) => {
    const id = String(key);
    return {
      id: id,
      name: id,
      inputRef: register,
      error: !!errors[id]?.message,
      helperText: errors[id]?.message,
    };
  };
};
