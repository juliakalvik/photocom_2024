import { useEffect, useState } from "react";
import PocketBase from "pocketbase";

async function fetchUsersList() {
  const pb = new PocketBase("https://photocom.pockethost.io/");
  const records = await pb
    .collection("users")
    .getFullList({ sort: "-created" });
  return records;
}

export default function UsersList() {
  const [usersList, setUsersList] = useState(["loading"]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await fetchUsersList();
      setUsersList(users);
    };

    fetchData();
  }, []);
  console.log(usersList);

  return (
    <>
      <h1>All photographers at photocom</h1>
      {usersList?.map((item) => (
        <div key={item.collectionId}>
          <p>Name: {item.name}</p>
          <p>Contact: {item.email}</p>
        </div>
      ))}
    </>
  );
}
