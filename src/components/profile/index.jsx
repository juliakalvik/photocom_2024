import pb from "../../lib/pocketbase";

export default function Profile() {
  const isLoggedIn = pb.authStore.isValid;

  if (!isLoggedIn) {
    return <h1>Please log in to view your profile.</h1>;
  }

  const currentUser = pb.authStore.model;

  return (
    <>
      <h1>My profile</h1>
      <p>Name: {currentUser.name}</p>
      <p>Email: {currentUser.email}</p>
    </>
  );
}

/*

import { useEffect, useState } from "react";
import PocketBase from "../../lib/pocketbase";
import pb from "../../lib/pocketbase";

async function fetchUserJobs(currentUserEmail) {
  const pb = new PocketBase("https://photocom.pockethost.io/");
  const records = await pb.collection("jobs").getList(1, 30, {
    expand: "user",
    filter: { "user.email": currentUserEmail },
  });

  return records.items;
}

export default function Profile() {
  const isLoggedIn = pb.authStore.isValid;
  const [userJobs, setUserJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      if (isLoggedIn) {
        const currentUserEmail = pb.authStore.model.email;
        const jobs = await fetchUserJobs(currentUserEmail);
        setUserJobs(jobs);
      }
    };

    fetchJobs();
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <h1>Please log in to view your profile.</h1>;
  }

  const currentUser = pb.authStore.model;

  return (
    <>
      <h1>My profile</h1>
      <p>Name: {currentUser.name}</p>
      <p>Email: {currentUser.email}</p>

      <h2>My Job Listings</h2>
      {userJobs.map((jobs) => (
        <div key={jobs.collectionId}>
          <p>Job Title: {jobs.title}</p>
          <p>Budget: {jobs.budget}</p>
         
          </div>
          ))}
        </>
      );
    }
    

*/
