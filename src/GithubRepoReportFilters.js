import DatePicker from 'react-date-picker';
import { useState, useEffect} from 'react';


const GithubRepoReportFilters = ({ filters, setFilters, filterOptions }) => {
  const [startDateFilter, setStartDateFilter] = useState(filters.start_date);
  const [endDateFilter, setEndDateFilter] = useState(filters.start_date);
  const [userFilter, setUserFilter] = useState(filters.user);
  const [stateFilter, setStateFilter] = useState(filters.state);
  const [isMergedFilter, setIsMergedFilter] = useState(filters.isMerged);

  const handleUserFilterChange = (event) => {
    setUserFilter(event.target.value);
  }

  const handleStatusFilterChange = (event) => {
    setStateFilter(event.target.value);
  }

  const handleIsMergedFilterChange = (event) => {
    setIsMergedFilter(event.target.checked);
    if(!isMergedFilter) { setStateFilter('closed') };
  }

  const applyFilters = () => {
    const newFilters = {
        ...filters, 
        'isSet': true, 
        'start_date': startDateFilter,
        'end_date': endDateFilter,
        'user': userFilter,
        'state': stateFilter,
        'isMerged': isMergedFilter,
    };
    setFilters(newFilters);
  }

  useEffect( () => {
    applyFilters();
  }, [startDateFilter, endDateFilter, userFilter, stateFilter, isMergedFilter]);

  return (
    <div>
        <h1>Filters</h1>
        Start Date: <DatePicker name='startDateFilter' onChange={setStartDateFilter} value={startDateFilter} /><br />
        End Date: <DatePicker name='endDateFilter' onChange={setEndDateFilter} value={endDateFilter} /><br />
        User: 
        <select value={userFilter} onChange={handleUserFilterChange}>
          {filterOptions.users.map((user) => {
              return (
                  <option key={user} value={user}>{user}</option>
              )
          })}
        </select><br />
        PR Status:
        <select disabled={isMergedFilter} value={stateFilter} onChange={handleStatusFilterChange}>
          {filterOptions.state.map((state) => {
              return (
                  <option key={state} value={state}>{state}</option>
              )
            })}
        </select>
        is Merged?: <input type="checkbox" value={isMergedFilter} onChange={handleIsMergedFilterChange}></input><br />
    </div>
  );
}
export default GithubRepoReportFilters;