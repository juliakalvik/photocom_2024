import { useEffect, useState } from "react";
import PocketBase from "pocketbase";

async function fetchJobsList() {
  const pb = new PocketBase("https://photocom.pockethost.io/");
  const records = await pb
    .collection("jobs")
    .getList(1, 30, { expand: "user" });
  return records.items;
}

export default function ListingForm() {
  const [jobList, setJobList] = useState(["loading"]);

  useEffect(() => {
    const fetchData = async () => {
      const jobs = await fetchJobsList();
      setJobList(jobs);
    };

    fetchData();
  }, []);
  console.log(jobList);

  return (
    <>
      <h1>Scroll through jobs here</h1>
      {jobList.map((item) => (
        <div key={item.collectionId}>
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
