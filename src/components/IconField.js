import { Asterisk } from "./Asterisk";
import { FieldFootNote } from "./FieldFootNote";

export const IconField = ({ field }) => {
  return (
    <div className="icon-field">
      <label className="request-form__input-label" htmlFor={field.name}>
        {field.label}
        {field.isRequired && <Asterisk />}
      </label>
      <div className="request-form__input">
        <div className="img-box">
          <img
            className="request-form__input-icon"
            src={field.icon}
            alt={field.label}
          />
        </div>
        <input
          className="request-form__input-field"
          type="text"
          id={field.name}
          name={field.name}
          defaultValue={field.value}
        ></input>
      </div>
      {field.note && <FieldFootNote field={field.note} />}
    </div>
  );
};
