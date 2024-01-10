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
        setJobs(fetchedJobs.records); // Assuming that jobs are in the 'records' property
      } catch (error) {
        setError(error.message); // Set error state
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div>
      <h1>Jobs List</h1>
      {error ? (
        <p>Error fetching data: {error}</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              {job.fields.Title} {job.fields.Description} {job.fields.Where}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
