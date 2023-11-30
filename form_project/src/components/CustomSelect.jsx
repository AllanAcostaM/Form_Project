import { useField } from "formik";
import PropTypes from "prop-types";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input_error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

CustomSelect.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CustomSelect;
