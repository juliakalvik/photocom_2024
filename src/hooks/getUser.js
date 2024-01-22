import PocketBase from "pocketbase";
const pb = new PocketBase("https://photocom.pockethost.io/");

export function IsUserLoggedIn() {
  return pb.authStore.isValid;
}

export function GetUser() {
  if (pb.authStore.isValid) {
    return pb.authStore.model;
  }

  return null;
}

export function logout() {
  pb.authStore.clear();
}
