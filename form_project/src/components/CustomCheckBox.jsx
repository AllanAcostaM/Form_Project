import { useField } from "formik";
import PropTypes from "prop-types";

const CustomCheckBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox"></div>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input_error" : ""}
      />
      <span>{label}</span>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

CustomCheckBox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CustomCheckBox;
