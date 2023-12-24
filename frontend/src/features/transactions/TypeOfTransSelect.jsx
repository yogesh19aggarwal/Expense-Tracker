import React from "react";

const TypeOfTransSelect = ({ type, onChangeTransaction }) => {
  return (
    <select
      className="select__field"
      value={type}
      onChange={onChangeTransaction}
      name="type"
      id="type"
    >
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>
  );
};

export default TypeOfTransSelect;
