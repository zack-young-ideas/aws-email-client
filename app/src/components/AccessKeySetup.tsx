import { useState } from 'react';

export default function AccessKeySetup({
  errorMessage,
  submitHandler
}: {
  errorMessage: string,
  submitHandler: Function
}) {
  const [formData, setFormData] = useState({
    accessKeyId: '',
    secretAccessKey: '',
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
    submitHandler(formData.accessKeyId, formData.secretAccessKey);
  }

  return (
    <div className="container">
      <h2 className="mt-3 mb-3">Setup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            className="form-label"
            htmlFor="accessKeyId"
          >
            Access Key ID
          </label>
          <input
            className="form-control"
            id="accessKeyId"
            name="accessKeyId"
            onChange={handleChange}
            type="text"
            value={formData.accessKeyId}
          />
        </div>
        <div className="mb-3">
          <label
            className="form-label"
            htmlFor="secretAccessKey"
          >
            Secret Access Key
          </label>
          <input
            className="form-control"
            id="secretAccessKey"
            name="secretAccessKey"
            onChange={handleChange}
            type="password"
            value={formData.secretAccessKey}
          />
        </div>
        <div className="mb-3">
          <p className="text-danger">{errorMessage}</p>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
