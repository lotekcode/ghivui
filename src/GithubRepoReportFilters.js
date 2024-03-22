import DatePicker from 'react-date-picker';
import { useState } from 'react';


const GithubRepoReportFilters = ({filters, setFilters, filterOptions }) => {
  const [startDateFilter, setStartDateFilter] = useState(filters.start_date);
  const [endDateFilter, setEndDateFilter] = useState(filters.start_date);
  const [userFilter, setUserFilter] = useState(filters.user);

  const handleUserFilterChange = (event) => {
    setUserFilter(event.target.value);
  }

  const applyFilters = () => {
    const newFilters = {
        ...filters, 
        'isSet': true, 
        'start_date': startDateFilter,
        'end_date': endDateFilter,
        'user': userFilter
    };

    setFilters(newFilters);
    
  }
  console.log(filterOptions);

  return (
    <div>
        <h1>Filters</h1>
        Start Date: <DatePicker name='startDateFilter' onChange={setStartDateFilter} value={startDateFilter} /><br />
        End Date: <DatePicker name='endDateFilter' onChange={setEndDateFilter} value={endDateFilter} /><br />
        User: 
        <select value={userFilter} onChange={handleUserFilterChange}>
            <option value="dantidwell">dantidwell</option>
            <option value="OakleyCord">OakleyCord</option>
            <option value="BBQGiraffe">BBQGiraffe</option>
        </select><br />
        <button name='submit' onClick={applyFilters}>View Report</button>
    </div>
  );
}
export default GithubRepoReportFilters;