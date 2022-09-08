import { FormLabel, Input } from "@chakra-ui/react";
import { FieldInputProps, FormikProps } from "formik";
import { FormEvent } from "react";
import FormGroup from "./form_group";

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  className?: string;
  inputClassName?: string;
  max?: number;
  variant?: string;
  placeholder?: string;
}

interface FormInputChildrenProps {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
}

const FormInput = ({
  label,
  name,
  type,
  max,
  variant = "filled",
  className,
  inputClassName,
  placeholder,
}: FormInputProps) => {
  return (
    <FormGroup name={name} className={className}>
      {({ field, form }: FormInputChildrenProps) => {
        const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
          const newValue = event.currentTarget.value;

          if (!max || newValue.length <= max)
            form.setFieldValue(name, newValue);
        };

        return (
          <>
            <FormLabel htmlFor={name}>{label}</FormLabel>

            <Input
              {...{ ...field, type, variant, placeholder }}
              onChange={handleOnChange}
              className={inputClassName}
            />
          </>
        );
      }}
    </FormGroup>
  );
};

export default FormInput;
