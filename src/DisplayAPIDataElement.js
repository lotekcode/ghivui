import React from 'react';

const DisplayAPIDataElement = ({ data }) => {
  const { total, author } = data;

  return (
    <div>
      <p>Author {author.login} has made {total} commits</p>
      <ul>
        {data.weeks.map(week => (
            <li>week: {week.w} added: {week.a} deleted: {week.d} commits: {week.c}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayAPIDataElement;