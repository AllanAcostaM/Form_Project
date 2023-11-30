import * as yup from "yup";

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  languajeType: yup
    .string()
    .oneOf(
      ["JavaScript", "Java", "Python", "PHP", "other"],
      "Invalid Languaje Type"
    )
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms and conditions"),
});
