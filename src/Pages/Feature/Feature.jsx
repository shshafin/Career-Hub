import { Link } from "react-router-dom";

const Feature = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div className="bg-base-100 border rounded-lg">
      <figure>
        <img className="m-7" src={logo} alt="Shoes" />
      </figure>
      <div className="m-7 space-y-3">
        <h2 className="card-title">{job_title}</h2>
        <p className="text-gray-400 font-semibold">{company_name}</p>
        <div className="space-x-5">
          <button className="btn btn-outline borderClr listItem">
            {remote_or_onsite}
          </button>
          <button className="btn btn-outline borderClr listItem">
            {job_type}
          </button>
        </div>

        <div className="flex items-center">
          <img src={`https://i.imgur.com/oH5cyti.png`} alt="" />
          <h1 className="text-gray-400 font-semibold text-xs md:text-base">
            {location}
          </h1>
          <img
            className="ml-4"
            src={`https://i.imgur.com/8Ff9InU.png`}
            alt=""
          />
          <h1 className="text-gray-400 font-semibold text-xs md:text-base">
            {salary}
          </h1>
        </div>

        <div className="card-actions justify-start">
          <Link to={`/job/${id}`}>
            <button className="btn buttonClr text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
