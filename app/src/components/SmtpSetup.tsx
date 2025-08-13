import { useState } from 'react';

export default function SmtpSetup({
  submitHandler
}: {
  submitHandler: Function
}) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    submitHandler(formData.username, formData.password);
  }

  return (
    <div className="container">
      <h2 className="mt-3 mb-3">Setup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            className="form-label"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="form-control"
            id="username"
            name="username"
            onChange={handleChange}
            type="text"
            value={formData.username}
          />
        </div>
        <div className="mb-3">
          <label
            className="form-label"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="form-control"
            id="password"
            name="password"
            onChange={handleChange}
            type="password"
            value={formData.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
