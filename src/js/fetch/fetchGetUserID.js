import { load } from "../localStorage";

export async function fetchGetUserID(url) {
  const sid = load('sid');
  const options = {
    method: 'GET',
    headers: {
        'accept': 'application/json',
    },
  };
  const response = await fetch(`${url}user/${sid}`, options);
  const responseJson = await response.json();
  return responseJson;
}