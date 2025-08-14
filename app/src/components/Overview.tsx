import { useState } from 'react';

export default function Overview({
  emails
}: {
  emails: any
}) {
  const emailsContainer = emails.map((item) => {
    const date = new Date(item.date);
    const dateDisplay = date.toLocaleDateString(
      'en-US',
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    );
    const timeDisplay = date.toLocaleTimeString(
      'en-US',
      { hour: 'numeric', minute: '2-digit' }
    )
    return (
      <li key={item.id}>
        <h3>{item.from}</h3>
        <h4>{item.subject}</h4>
        <p>{dateDisplay} - {timeDisplay}</p>
      </li>
    );
  });

  return (
    <div className="container">
      {emailsContainer}
    </div>
  );
}
