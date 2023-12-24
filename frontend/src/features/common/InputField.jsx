import './InputField.css'
export default function InputField(props) {
    const {label, ...inputProps} = props;
  return (
    <label
      className="input__control"
      htmlFor={props.name}
    >
      <span>{label}</span>
      <input  {...inputProps}/>
    </label>
  );
}