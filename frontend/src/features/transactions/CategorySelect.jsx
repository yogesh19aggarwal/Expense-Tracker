import React from "react";
import "./CategorySelect.css";
import { categoriesSelectOptions } from "../../helpers/CategoriesSelect";
const CategorySelect = ({ category, onChangeTransaction, type }) => {
  return (
    <select
      className="select__field"
      value={category}
      onChange={onChangeTransaction}
      name="category"
      id="category"
    >
      {Object.keys(categoriesSelectOptions[type]).map((option) => (
        <option key={option} value={option}>
          {categoriesSelectOptions[type][option]}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
