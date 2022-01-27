import { IconField } from "./IconField";
import { Field } from "./Field";
import { Textarea } from "./Textarea";

export const RequestForm = ({ fields }) => {
  return (
    <form className="request-form direction-column">
      <IconField field={fields.loadPointAddress} />
      <IconField field={fields.customs} />
      <IconField field={fields.unloadPointAddress} />
      <IconField field={fields.estimatedTransportationDate} />
      <IconField field={fields.truckBodyType} />
      <Field field={fields.deliveryConditions} />
      <Textarea field={fields.comment} />
    </form>
  );
};
