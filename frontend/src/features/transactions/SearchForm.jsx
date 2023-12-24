import DateFilter from "./DateFilter";
import "./SearchForm.css";
export default function SearchForm({ loading, searchProps }) {
  const {
    onClickSearch: onSubmitSearchForm,
    searchForm,
    onChangeSearchFormField,
  } = searchProps;
  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitSearchForm();
  };
  return (
    <form onSubmit={onSubmit} className="search__form">
      <input
        value={searchForm.filter}
        onChange={onChangeSearchFormField}
        disabled={loading}
        type="search"
        name="filter"
        id="searchTransaction"
        placeholder="Search by name or description"
      />
      <div className="search__btn">
        <DateFilter
          startDate={searchForm.startDate}
          endDate={searchForm.endDate}
          onChangeSearchFormField={onChangeSearchFormField}
        />
        <button title="Search" className="btn">
          Search
        </button>
      </div>
    </form>
  );
}
