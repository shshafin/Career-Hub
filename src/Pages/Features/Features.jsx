import { useEffect, useState } from "react";
import "./Feature.css";
import Feature from "../Feature/Feature";

const Features = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch(`Jobs.json`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="max-w-7xl mx-auto pb-14">
        <div className="text-center space-y-3">
          <h1 className=" text-3xl md:text-5xl font-bold">Featured Jobs</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 mx-4 md:mx-0 md:grid-cols-2 gap-10 mt-10">
          {jobs.slice(0, dataLength).map((job) => (
            <Feature key={job.id} job={job}></Feature>
          ))}
        </div>
        <div className={dataLength === jobs.length && "hidden"}>
          <div className="text-center mt-10">
            <button
              onClick={() => setDataLength(jobs.length)}
              className="btn buttonClr text-white"
            >
              See All Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
