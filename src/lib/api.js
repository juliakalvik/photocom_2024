import { useState, useEffect } from "react";

export default function JobsComponent() {
  const [jobs, setJobs] = useState([]);
  const url = `https://api.airtable.com/v0/appmx6fWRWyfBRG5F/tblqU7nF5ckbznwU8`;

  const accessToken =
    "Bearer patbO5qQlwYxD9xIl.22a28400a760ef238ffcd0ae97658291d7358a2fae4558df609da760658ccb6b";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: accessToken,
          },
        });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const fetchedJobs = await response.json();
        setJobs(fetchedJobs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url, accessToken]);

  return (
    <div>
      <h1>Jobs List</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <strong>{job.fields.Name}</strong>: {job.fields.Description}
          </li>
        ))}
      </ul>
    </div>
  );
}
