import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {
  ErrorMessage,
  Field,
  FieldInputProps,
  FieldMetaProps,
  FormikProps,
} from "formik";

interface FormGroupProps {
  name: string;
  className?: string;
  children: (props: any) => JSX.Element;
}

interface FormGroupChildrenProps {
  field: FieldInputProps<any>;
  meta: FieldMetaProps<any>;
  form: FormikProps<any>;
}

const FormGroup = ({ name, className, children }: FormGroupProps) => {
  return (
    <Field name={name}>
      {({ field, form, meta }: FormGroupChildrenProps) => {
        const haveError = meta?.error && meta.touched;

        return (
          <>
            <FormControl
              isInvalid={haveError as boolean | undefined}
              className={className}
            >
              {children({ field, form })}

              <ErrorMessage
                name={name}
                render={(msg) => <FormErrorMessage>{msg}</FormErrorMessage>}
              />
            </FormControl>
          </>
        );
      }}
    </Field>
  );
};

export default FormGroup;
