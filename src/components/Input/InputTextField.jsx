import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { colorShades } from "@/utils/theme";

const InputTextField = ({
  value = "",
  width = "80%",
  size = "medium",
  name = "username",
  label = "Username",
  variant = "outlined",
  onChange = () => {},
  required = true,
  type = "text,",
  minLength = 4,
  maxLength = 50,
  placeholder,
}) => {
  return (
    <>
      <TextField
        type={type}
        size={size}
        value={value}
        id={name}
        placeholder={placeholder}
        name={name}
        label={label}
        variant={variant}
        onChange={onChange}
        sx={{
          width,
          borderRadius: ".25rem",
          backgroundColor: colorShades.grey["700"],
        }}
        required={required}
        spellCheck={false}
        autoComplete="off"
        inputProps={{ minLength, maxLength }}
      />
    </>
  );
};

InputTextField.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.string,
};

export default InputTextField;
