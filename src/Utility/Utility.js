const getStoredJob = () => {
  const storedJob = localStorage.getItem("job application");
  if (storedJob) {
    return JSON.parse(storedJob);
  }
  return [];
};

const saveStoredJob = (id) => {
  const storedJobs = getStoredJob();
  const exists = storedJobs.find((jobId) => jobId === id);

  if (!exists) {
    storedJobs.push(id);
    localStorage.setItem("job application", JSON.stringify(storedJobs));
  }
};

export { getStoredJob, saveStoredJob };
