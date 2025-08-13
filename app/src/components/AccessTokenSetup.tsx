import { useState } from 'react';

export default function AccessTokenSetup({
  submitHandler
}: {
  submitHandler: Function
}) {
  const [formData, setFormData] = useState({
    accessTokenId: '',
    secretAccessToken: '',
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
    submitHandler(formData.accessTokenId, formData.secretAccessToken);
  }

  return (
    <div className="container">
      <h2 className="mt-3 mb-3">Setup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            className="form-label"
            htmlFor="accessTokenId"
          >
            Access Token ID
          </label>
          <input
            className="form-control"
            id="accessTokenId"
            name="accessTokenId"
            onChange={handleChange}
            type="text"
            value={formData.accessTokenId}
          />
        </div>
        <div className="mb-3">
          <label
            className="form-label"
            htmlFor="secretAccessToken"
          >
            Secret Access Token
          </label>
          <input
            className="form-control"
            id="secretAccessToken"
            name="secretAccessToken"
            onChange={handleChange}
            type="password"
            value={formData.secretAccessToken}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
