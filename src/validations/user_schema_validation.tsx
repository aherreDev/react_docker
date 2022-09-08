import * as yup from "yup";
import "yup-phone";

const userSchemaValidation = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  cellphone: yup.string().phone("MX").required(),
});

export default userSchemaValidation;
