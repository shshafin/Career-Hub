import { Link, useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveStoredJob } from "../../Utility/Utility";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    salary,
    job_title,
  } = job;

  const handleApply = () => {
    saveStoredJob(idInt);
    toast("You Applied the job !!");
  };

  return (
    <div>
      <div className="div">
        <div className=" max-w-7xl mx-auto">
          <h1 className="text-center font-bold text-4xl pt-10">
            Job Details : {id}
          </h1>
          <img src={`https://i.imgur.com/BxOccgh.png`} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-28 max-w-7xl mx-auto">
        <div className=" col-span-3 space-y-7">
          <h1>
            <strong>Job Description: </strong>
            {job_description}
          </h1>
          <h1>
            <strong>Job Responsibility: </strong>
            {job_responsibility}
          </h1>
          <h1 className="leading-8">
            <strong>Educational Requirements: </strong>
            <br />
            {educational_requirements}
          </h1>
          <h1 className="leading-8">
            <strong>Experiences: </strong>
            <br />
            {experiences}
          </h1>
        </div>
        <div className="col-span-1  ">
          <div className="bg-violet-100 rounded-lg">
            <h1 className="p-4  font-bold text-xl">Job Details</h1>
            <hr className="border-violet-300  mx-4" />

            <div className="p-4 space-y-3">
              <div className="flex">
                <img
                  className="w-4 "
                  src={`https://i.imgur.com/Lu9SIfx.png`}
                  alt=""
                />
                <h1>
                  <span className="font-semibold">Salary :</span>
                  {salary} (Per Month)
                </h1>
              </div>
              <div className="flex  ">
                <img
                  className="w-4 "
                  src={`https://i.imgur.com/zmlVLqZ.png`}
                  alt=""
                />
                <h1>
                  <span className="font-semibold">Job Title :</span>
                  {job_title}
                </h1>
              </div>
            </div>

            <h1 className="px-4 py-2 font-bold text-xl">Contact Information</h1>
            <hr className="border-violet-300  mx-4" />

            <div className="p-4 space-y-3 ">
              <div className="flex">
                <img
                  className="w-4 "
                  src={`https://i.imgur.com/hBpWe4N.png`}
                  alt=""
                />
                <h1>
                  <span className="font-semibold">Phone :</span>
                  {contact_information.phone}
                </h1>
              </div>
              <div className="flex items-center ">
                <img
                  className="w-4 h-6 "
                  src={`https://i.imgur.com/FgRCcCg.png`}
                  alt=""
                />
                <h1>
                  <span className="font-semibold">Email :</span>
                  {contact_information.email}
                </h1>
              </div>
              <div className="flex ">
                <img
                  className="w-4 h-6 "
                  src={`https://i.imgur.com/UMO4n8c.png`}
                  alt=""
                />
                <h1>
                  <span className="font-semibold">Address :</span>
                  {contact_information.address}
                </h1>
              </div>
            </div>
          </div>

          <Link>
            <button
              onClick={handleApply}
              className="buttonClr w-full text-white p-3 mt-4"
            >
              Apply Now
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
