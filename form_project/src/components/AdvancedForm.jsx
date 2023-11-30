import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";
import { advancedSchema } from "../schemas/advancedSchema";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ username: "", languajeType: "", acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <CustomSelect
            label="Languaje Type"
            name="languajeType"
            placeholder="Please select your languaje"
          >
            <option value="">Please select a languaje type</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="PHP">PHP</option>
            <option value="other">Other</option>
          </CustomSelect>
          <CustomCheckBox
            label="I accept the terms and conditions"
            type="checkbox"
            name="acceptedTos"
          />
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AdvancedForm;
