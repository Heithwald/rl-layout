import { Asterisk } from "./Asterisk";

export const Textarea = ({ field }) => {
  return (
    <div className="text-field">
      <label className="request-form__input-label" htmlFor="customs">
        {field.label}
        {field.isRequired && <Asterisk />}
      </label>
      <div className="request-form__input">
        <textarea
          className="request-form__textarea-field"
          type="text"
          id={field.name}
          name={field.name}
          defaultValue={field.value}
        ></textarea>
      </div>
    </div>
  );
};
