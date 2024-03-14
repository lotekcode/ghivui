import React from 'react';

const DisplayAPIDataElement = ({ data }) => {
  const { total, author, weeks } = data;
  const totalLinesAdded = weeks.reduce((sum, week) => sum + week.a, 0);
  const totalLinesDeleted = weeks.reduce((sum, week) => sum + week.d, 0);


  return (
    <div>
      <p>Author {author.login} has made: <br />
      {total} commits<br />
      {totalLinesAdded} lines added <br />
      {totalLinesDeleted} lines deleted</p>
      <ul>
        {weeks.map(week => (
            <li>week: {week.w} added: {week.a} deleted: {week.d} commits: {week.c}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayAPIDataElement;