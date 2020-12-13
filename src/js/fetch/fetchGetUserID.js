import { load } from "../localStorage";

export async function fetchGetUserID(url) {
  const id = load('UserToken').user.id;
  const options = {
    method: 'GET',
    headers: {
        'accept': 'application/json',
    },
  };
  const response = await fetch(`${url}user/${id}`, options);
  const responseJson = await response.json();
  return responseJson;
}