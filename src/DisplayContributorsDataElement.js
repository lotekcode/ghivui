import React from 'react';
import Table from 'react-bootstrap/Table';

const DisplayContributorDataElement = ({ data }) => {
  const { author, weeks } = data;
  const totalCommits = weeks.reduce((sum, week) => sum + week.c, 0);
  const totalLinesAdded = weeks.reduce((sum, week) => sum + week.a, 0);
  const totalLinesDeleted = weeks.reduce((sum, week) => sum + week.d, 0);
  const totalWeeks = weeks.length;
  const startingWeek = weeks[0].w;
  const endingWeek = weeks[weeks.length - 1].w;

  const convertToWeeklyDate = (unixTimestamp) => {
    const weeklyDate = new Date(unixTimestamp*1000);
    return weeklyDate.toLocaleDateString();
  }

  return (
    <div>
      <p>Author {author.login} has made: <br />
        {totalCommits} commits<br />
        {totalLinesAdded} lines added <br />
        {totalLinesDeleted} lines deleted<br />
        over {totalWeeks} weeks from {convertToWeeklyDate(startingWeek)} through {convertToWeeklyDate(endingWeek)}
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Week</th>
            <th>Lines Added</th>
            <th>Lines Deleted</th>
            <th>Commits</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map(week => (
              week.c !== 0 && (
              <tr key={week.w}>
                <td>{convertToWeeklyDate(week.w)}</td>
                <td>{week.a}</td> 
                <td>{week.d}</td>
                <td>{week.c}</td>
              </tr> )
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayContributorDataElement;