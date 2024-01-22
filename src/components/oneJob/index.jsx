import { useEffect, useState } from "react";
import PocketBase from "pocketbase";

async function fetchJob() {
  const searchParams = new URLSearchParams(window.location.search);
  let id = searchParams.get("id");
  const pb = new PocketBase("https://photocom.pockethost.io/");
  const records = await pb.collection("jobs").getOne(id, { expand: "user" });
  if (!records) {
    console.error("Record not found");
    return;
  }
  return records;
}

export default function OneJob() {
  const [oneJob, setOneJob] = useState(["loading"]);

  useEffect(() => {
    const fetchData = async () => {
      const job = await fetchJob();
      setOneJob(job);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Job specific page</h1>
      <div key={oneJob.id}>
        <p>{oneJob.title}</p>
        <p>Budget: {oneJob.budget}</p>
        <p>When: {oneJob.date}</p>
        <p>Where: {oneJob.place}</p>
        <p>Type of shoot: {oneJob.type}</p>
        <p>Description: {oneJob.description}</p>
      </div>
    </>
  );
}
