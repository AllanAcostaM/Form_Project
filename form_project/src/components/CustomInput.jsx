import { useField } from "formik";
import PropTypes from "prop-types";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input_error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CustomInput;
