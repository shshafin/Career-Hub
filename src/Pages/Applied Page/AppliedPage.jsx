import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJob } from "../../Utility/Utility";
import Applied from "../Applied/Applied";
import { IoIosArrowDown } from "react-icons/io";

const AppliedPage = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleFilter = (filter) => {
    if (filter === "All") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "Remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "Onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobs = getStoredJob();
    if (storedJobs.length > 0) {
      const jobApplied = jobs.filter((job) => storedJobs.includes(job.id));

      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied);
    }
  }, []);

  return (
    <div>
      <div className="div">
        <div className=" max-w-7xl mx-auto">
          <h1 className="text-center font-bold text-4xl pt-10">
            Applied Jobs {appliedJobs.length}
          </h1>
          <img src={`https://i.imgur.com/BxOccgh.png`} alt="" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mt-7">
          <details className="dropdown ">
            <summary className="m-1 btn">
              Filter By <IoIosArrowDown />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={() => handleFilter("All")}>
                <a>All</a>
              </li>
              <li onClick={() => handleFilter("Remote")}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleFilter("Onsite")}>
                <a>Onsite</a>
              </li>
            </ul>
          </details>
        </div>
        {displayJobs.map((apply) => (
          <Applied key={apply.id} apply={apply}></Applied>
        ))}
      </div>
    </div>
  );
};

export default AppliedPage;
