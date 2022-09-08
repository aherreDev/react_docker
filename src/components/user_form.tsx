import { Button, ButtonGroup } from "@chakra-ui/react";
import userSchemaValidation from "../validations/user_schema_validation";
import { FormWithValidations } from "./form";
import FormInput from "./form/form_input";
import { UnSavedUser } from "../types/index";

interface UserFormProps {
  onSubmit: (values: UnSavedUser) => void;
  onCancel: () => void;
  initialValues: UnSavedUser;
}

const UserForm = ({ onSubmit, onCancel, initialValues }: UserFormProps) => {
  return (
    <FormWithValidations
      initialValues={initialValues}
      validationSchema={userSchemaValidation}
      onSubmit={onSubmit}
    >
      {({}) => (
        <>
          <FormInput
            className="mt-3 mb-0"
            label="User Full Name"
            name="name"
            type="text"
          />

          <FormInput
            className="mt-3 mb-0"
            label="User address"
            name="address"
            type="text"
          />

          <FormInput
            className="mt-3 mb-0"
            label="User cellphone"
            placeholder="+523123123123"
            name="cellphone"
            type="text"
          />

          <ButtonGroup spacing="6" size="md" w="100%" py="5">
            <Button
              type="button"
              colorScheme="red"
              onClick={onCancel}
              ml="auto"
            >
              Cancel
            </Button>

            <Button type="submit" colorScheme="teal">
              Add user
            </Button>
          </ButtonGroup>
        </>
      )}
    </FormWithValidations>
  );
};

export default UserForm;
