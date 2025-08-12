export default function Setup() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <form>
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
            type="text"
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
            type="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
