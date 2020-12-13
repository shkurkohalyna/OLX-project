import { load } from "../localStorage";

export async function fetchGetUser(url) {
  const key = load('key');
  const options = {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        'Authorization': `${key}`,
    },
  };
  const response = await fetch(`${url}user`, options);
  const responseJson = await response.json();
  return responseJson;
}