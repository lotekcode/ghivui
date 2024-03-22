import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import GithubRepoSearchBar from './GithubRepoSearchBar';
import GithubRepoReport from './GithubRepoReport';
import GithubRepoReportFilters from './GithubRepoReportFilters';

const App = () => {

   const [filters, setFilters] = useState(
    {
      isSet: false,
      user: 'OakleyCord',
      start_date: new Date(),
      end_date: new Date(),
    }
  );
  const [filterOptions, setFilterOptions] = useState(
    {
      'users': [],
      'state': '',
    }
  );
  const [githubApiUrl, setGithubApiUrl] = useState(null);

  return (
    <div>
      <GithubRepoSearchBar  setGithubApiUrl={setGithubApiUrl} />

      { githubApiUrl &&
        <GithubRepoReportFilters filters={filters} setFilters={setFilters} filterOptions={filterOptions} />
      }

      { githubApiUrl && filters.isSet && 
        <GithubRepoReport githubApiUrl={githubApiUrl} filters={filters} />
      }

    </div>
  );
}

export default App;

