import { useState } from "react";
import PocketBase from "pocketbase";
import { IsUserLoggedIn } from "../../hooks/getUser";
import { GetUser } from "../../hooks/getUser";

const pb = new PocketBase("https://photocom.pockethost.io/");

export default function ListingForm() {
  const [isCreatingListing, setCreatingListing] = useState(false);
  const jobType = [
    "Wedding",
    "Event",
    "Campaign",
    "Commercial",
    "Family",
    "Engagement",
    "Styled shoot",
    "Other",
  ];

  console.log(GetUser());

  async function createListing(data) {
    setCreatingListing(true);
    try {
      const userId = pb.authStore.model.id;

      data.userId = userId;

      const record = await pb.collection("jobs").create(data);
      console.log(record);
    } catch (error) {
      console.error("Error creating listing:", error);
    }
    setCreatingListing(false);
  }

  const submitListingForm = async (event) => {
    event.preventDefault();
    const { title, budget, datetime, place, type, description } =
      event.target.elements;
    const titleValue = title.value;
    const budgetValue = budget.value;
    const datetimeValue = datetime.value;
    const placeValue = place.value;
    const typeValue = type.value;
    const descriptionValue = description.value;
    const user = GetUser();

    const listingData = {
      title: titleValue,
      budget: budgetValue,
      datetime: datetimeValue,
      place: placeValue,
      type: typeValue,
      description: descriptionValue,
      user: user.id,
    };

    await createListing(listingData);
  };

  return (
    <>
      <IsUserLoggedIn />
      <form onSubmit={submitListingForm}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" required />
        </div>

        <div>
          <label>Budget:</label>
          <input type="number" name="budget" required />
        </div>

        <div>
          <label>Datetime:</label>
          <input type="datetime-local" name="datetime" required />
        </div>

        <div>
          <label>Place:</label>
          <input type="text" name="place" required />
        </div>

        <div>
          <label>Type:</label>
          <select type="select" name="type" required>
            {jobType.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label>Description:</label>
          <textarea name="description" required />
        </div>

        <button type="submit" disabled={isCreatingListing}>
          {isCreatingListing ? "Creating Listing..." : "Create Listing"}
        </button>
      </form>
    </>
  );
}
