import DatePicker from 'react-date-picker';
import { useState } from 'react';


const GithubRepoReportFilters = ({filters, setFilters}) => {
  const [startDateFilter, setStartDateFilter] = useState(filters.start_date);
  const [endDateFilter, setEndDateFilter] = useState(filters.start_date);
  const [userFilter, setUserFilter] = useState(filters.user);

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


  return (
    <div>
        <h1>Filters</h1>
        Start Date: <DatePicker name='startDateFilter' onChange={setStartDateFilter} value={startDateFilter} /><br />
        End Date: <DatePicker name='endDateFilter' onChange={setEndDateFilter} value={endDateFilter} /><br />
        User: 
        <select value={userFilter} onChange={setUserFilter}>
            <option value="user1">user1</option>
            <option value="user2">user2</option>
            <option value="user3">user3</option>
        </select><br />
        <button name='submit' onClick={applyFilters}>View Report</button>
    </div>
  );
}
export default GithubRepoReportFilters;