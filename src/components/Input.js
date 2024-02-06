const Input = ({
  htmlFor,
  classNameLabel,
  label,
  type,
  name,
  placeholder,
  required,
  className,
  value,
  validation,
}) => {
  return (
    <>
      <label htmlFor={htmlFor} className={classNameLabel.join(" ")}>
        {label}
      </label>
      <input
        type={type}
        name={name || undefined}
        placeholder={placeholder || undefined}
        required={required}
        className={className.join(" ")}
        value={value || undefined}
      />
      {validation && !validation.isValid && (
        <p className="text-red-500 row-start-3">{validation.message}</p>
      )}
    </>
  );
};

export default Input;
