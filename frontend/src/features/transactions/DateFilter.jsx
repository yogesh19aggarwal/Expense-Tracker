import "./DateFilter.css";
export default function DateFilter({
  startDate,
  endDate,
  onChangeSearchFormField,
}) {
  return (
    <div className="trans__dateFilters">
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={startDate}
        onChange={onChangeSearchFormField}
      />
      <span>to</span>
      <input
        type="date"
        id="endDate"
        name="endDate"
        value={endDate}
        onChange={onChangeSearchFormField}
      />
    </div>
  );
}
