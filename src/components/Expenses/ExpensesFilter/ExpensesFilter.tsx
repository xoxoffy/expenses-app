import { FunctionComponent, useState } from "react";
import "./ExpensesFilter.css";

interface Props {
  filterChangeHandler: any;
  selectedFilterYear: number;
}

const ExpensesFilter: FunctionComponent<Props> = ({
  filterChangeHandler,
  selectedFilterYear,
}) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          value={selectedFilterYear}
          onChange={(event) => filterChangeHandler(event.target.value)}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
