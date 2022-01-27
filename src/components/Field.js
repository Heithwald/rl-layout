import { Asterisk } from "./Asterisk";

export const Field = ({ field }) => {
  return (
    <div className="field">
      <label className="request-form__input-label" htmlFor={field.name}>
        {field.label}
        {field.isRequired && <Asterisk />}
      </label>
      <div className="request-form__input">
        <input
          className="request-form__input-field"
          type="text"
          id={field.name}
          name={field.name}
          defaultValue={field.value}
        ></input>
      </div>
    </div>
  );
};
