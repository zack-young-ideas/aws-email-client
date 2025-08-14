import { useState } from 'react';
import {
  IoMailOutline, IoOptionsOutline, IoSettingsOutline
} from 'react-icons/io5';
import './Overview.scss';

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
      <li
        className="border-bottom p-3"
        key={item.id}
      >
        <h3>{item.from}</h3>
        <h4>{item.subject}</h4>
        <p>{dateDisplay} - {timeDisplay}</p>
        <p>{item.content}</p>
      </li>
    );
  });

  return (
    <main className="d-flex flex-nowrap">
      <div
        className="d-flex flex-column flex-shrink-0 p-1 py-3 bg-dark"
      >
        <ul
          className="nav nav-pills nav-flush flex-column mb-auto text-center"
        >
          <li className="p-2">
            <a
              className="active nav-link px-2 py-1 text-white"
              href=""
            >
              <IoMailOutline size={22} />
            </a>
          </li>
          <li className="p-2">
            <a
              className="nav-link px-2 py-1 text-white"
              href=""
            >
              <IoSettingsOutline size={22} />
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-column flex-shrink-0 p-0">
        <div className="border-bottom p-3">
          <button
            className="btn btn-primary"
          >
            + New Message
          </button>
        </div>
        <ul
          className="nav nav-pills nav-flush flex-column mb-auto p-2"
        >
          <li>
            <a
              className="nav-link text-dark"
              href=""
            >
              Inbox
            </a>
          </li>
          <li>
            <a
              className="nav-link text-dark"
              href=""
            >
              Sent
            </a>
          </li>
          <li>
            <a
              className="nav-link text-dark"
              href=""
            >
              Drafts
            </a>
          </li>
          <li>
            <a
              className="nav-link text-dark"
              href=""
            >
              Spam
            </a>
          </li>
          <li>
            <a
              className="nav-link text-dark"
              href=""
            >
              Archive
            </a>
          </li>
        </ul>
      </div>
      <div className="border-end d-flex flex-column flex-shrink-0 p-0">
        <div className="bg-light border-bottom p-3">
          <input
            className="form-control"
            placeholder="Filter messages..."
            type="text"
          />
          <IoOptionsOutline size={22} />
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          {emailsContainer}
        </ul>
      </div>
    </main>
  );
}
