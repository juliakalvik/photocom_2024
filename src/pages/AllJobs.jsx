import { useState, useEffect } from "react";

export default function JobsComponent() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const url = `https://api.airtable.com/v0/appmx6fWRWyfBRG5F/tblqU7nF5ckbznwU8`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: import.meta.env.VITE_REACT_APP_ACCESS_TOKEN,
          },
        });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const fetchedJobs = await response.json();
        setJobs(fetchedJobs.records);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <>
      <div className="allJobs">
        <h1>Jobs List</h1>
        {error ? (
          <p>Error fetching data: {error}</p>
        ) : (
          <ul>
            {jobs.map((job) => (
              <div className="jobCards" key={job.id}>
                <h2>{job.fields.Title} </h2>
                <h4>{job.fields.Where}</h4>
                <p>{job.fields.Description}</p>
                <hr></hr>
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
