import React from 'react';

const DisplayAPIDataElement = ({ data }) => {
  const { author, weeks } = data;
  const totalCommits = weeks.reduce((sum, week) => sum + week.c, 0);
  const totalLinesAdded = weeks.reduce((sum, week) => sum + week.a, 0);
  const totalLinesDeleted = weeks.reduce((sum, week) => sum + week.d, 0);
  const totalWeeks = weeks.length;
  const startingWeek = weeks[0].w;
  const endingWeek = weeks[weeks.length - 1].w;

//test
  return (
    <div>
      <p>Author {author.login} has made: <br />
        {totalCommits} commits<br />
        {totalLinesAdded} lines added <br />
        {totalLinesDeleted} lines deleted<br />
        over {totalWeeks} weeks from {startingWeek} through {endingWeek}
      </p>
      <ul>
        {weeks.map(week => (
            week.c !== 0 && <li>week: {week.w} added: {week.a} deleted: {week.d} commits: {week.c}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayAPIDataElement;