import "./Applied.css";

const Applied = ({ apply }) => {
  console.log(apply);
  const {
    logo,
    company_name,
    job_title,
    remote_or_onsite,
    salary,
    job_type,
    location,
  } = apply;
  return (
    <div className="border my-7 p-5 md:flex ">
      <img className="bg-gray-200  px-12 py-20 w-60 " src={logo} alt="" />

      <div className="md:p-5 space-y-3">
        <h1 className="text-xl font-bold text-zinc-700 mt-3 md:mt-0">
          {job_title}
        </h1>
        <h1 className="text-xl font-medium text-zinc-400">{company_name}</h1>
        <div className="flex justify-between">
          <div className="space-x-5">
            <button className="btn btn-outline borderClr listItem">
              {remote_or_onsite}
            </button>
            <button className="btn btn-outline borderClr listItem">
              {job_type}
            </button>
          </div>
          <button className="btn buttonClr text-white md:ml-[200px] lg:ml-[600px]  ">
            View Details
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
            Salary: {salary}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Applied;
