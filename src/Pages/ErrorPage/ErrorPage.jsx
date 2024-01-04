import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl text-center">Error Page</h1>
        <Link to={`/`}>Go back</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
