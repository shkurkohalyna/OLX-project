import { load } from "../localStorage";

export async function fetchGetOwn(url) {
  const key = load('key');
  const options = {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        'Authorization': `${key}`,
    },
  };
  const response = await fetch(`${url}call/own`, options);
  const responseJson = await response.json();
  return responseJson;
}