import { Formik, FormikValues } from "formik";

interface FormWithValidationsProps {
  className?: string;
  formId?: string;
  initialValues: FormikValues;
  validationSchema?: any | (() => any);

  onSubmit: (values: any) => void;
  children: (props: any) => JSX.Element;
}

const FormWithValidations = ({
  initialValues,
  onSubmit,
  className,
  formId,
  children,
  validationSchema,
}: FormWithValidationsProps) => {
  return (
    <Formik {...{ initialValues, onSubmit, validationSchema }}>
      {(props: any) => {
        const { handleSubmit } = props;

        return (
          <form className={className} id={formId} onSubmit={handleSubmit}>
            {children(props)}
          </form>
        );
      }}
    </Formik>
  );
};

export default FormWithValidations;
