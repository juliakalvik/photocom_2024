import pb from "../../lib/pocketbase";
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import { Link } from "@tanstack/react-router";
import { Card } from "@mui/material";

async function fetchUserJobs(id) {
  const pb = new PocketBase("https://photocom.pockethost.io/");
  const userPosts = await pb
    .collection("jobs")
    .getList(1, 50, { filter: `'${id}' = user` });
  if (!userPosts) {
    console.error("Record not found");
    return;
  }
  return userPosts.items;
}

export default function MyJobs() {
  const [userJobs, setUserJobs] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const jobs = await fetchUserJobs(pb.authStore.model.id);
      setUserJobs(jobs);
    };

    fetchData();
  }, []);

  const isLoggedIn = pb.authStore.isValid;

  if (!isLoggedIn) {
    return <h1>Please log in to view your profile.</h1>;
  }
  return (
    <>
      <h1>My jobs:</h1>
      {!userJobs && <p>Loading...</p>}
      {userJobs?.map((item) => (
        <Card
          sx={{
            textAlign: "left",
            maxWidth: 600,
            m: 2,
            p: 4,
          }}
          key={item.id}
        >
          <Link to={`/onejob/?id=${item.id}`}>
            <h3>{item.title}</h3>
          </Link>
          <p>Budget: {item.budget} NOK</p>
          <p>When: {item.date}</p>
          <p>Where: {item.place}</p>
          <p>Type of shoot: {item.type}</p>
          <p>Description: {item.description}</p>
          <p>Job listed by you.</p>
        </Card>
      ))}
    </>
  );
}
