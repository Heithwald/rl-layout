import React from "react";

export const FieldFootNote = ({ field }) => {
  return (
    <div className="input-field__footnote">
      <p className="input-field__footnote-text">
        Объём: <span className="weight-500">до {field.volume} куб.м</span>{" "}
        Грузоподъёмность:{" "}
        <span className="weight-500">до {field.loadCapacity} тонн</span>
      </p>
    </div>
  );
};
