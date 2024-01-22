import { useEffect, useState } from "react";
import PocketBase from "pocketbase";

async function fetchJob() {
  const pb = new PocketBase("https://photocom.pockethost.io/");
  const records = await pb
    .collection("jobs")
    .getOne("RECORD_ID", { expand: "relField1,relField2.subRelField" });
  if (!records) {
    console.error("Record not found");
    return;
  }
  return records.items;
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
  console.log(oneJob);

  return (
    <>
      <h1>Job specific page</h1>
      {oneJob.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Budget: {item.budget}</p>
          <p>When: {item.date}</p>
          <p>Where: {item.place}</p>
          <p>Type of shoot: {item.type}</p>
          <p>Description: {item.description}</p>
          <p>Job listed by: {item?.expand?.user?.name}</p>
        </div>
      ))}
    </>
  );
}
