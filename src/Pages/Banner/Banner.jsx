import "./Banner.css";

const Banner = () => {
  return (
    <div className="div">
      <div className="max-w-7xl mx-auto">
        <div className="hero">
          <div className="flex items-center flex-col  lg:flex-row-reverse">
            <img
              src={`https://i.imgur.com/nADLAEf.png`}
              className="max-w-sm md:max-w-xl "
            />

            <div className="space-y-5 mx-4">
              <h1 className=" text-center md:text-justify mt-5 md:mt-0 text-4xl md:text-6xl font-bold md:leading-[60px] ">
                One Step <br /> Closer To Your <br />{" "}
                <span className="listItem">Dream Job</span>
              </h1>

              <p className="md:w-2/3">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <div className="text-center md:text-justify">
              <button className="btn buttonClr text-white">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
