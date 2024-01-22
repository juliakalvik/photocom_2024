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

export default function Profile() {
  const [userJobs, setUserJobs] = useState(["loading"]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(pb.authStore.model.id);
      const jobs = await fetchUserJobs(pb.authStore.model.id);
      setUserJobs(jobs);
    };

    fetchData();
  }, []);

  const isLoggedIn = pb.authStore.isValid;

  if (!isLoggedIn) {
    return <h1>Please log in to view your profile.</h1>;
  }

  const currentUser = pb.authStore.model;
  console.log(currentUser);

  return (
    <>
      <h1>My profile</h1>
      <p>Name: {currentUser.name}</p>
      <p>Email: {currentUser.email}</p>
      {userJobs.map((item) => (
        <Card
          sx={{
            textAlign: "left",
            maxWidth: 600,
            m: 2,
            p: 2,
          }}
          key={item.id}
        >
          <Link to={`/onejob/?id=${item.id}`}>
            <h3>{item.title}</h3>
          </Link>
        </Card>
      ))}
    </>
  );
}
