import { load } from "../localStorage";

export async function fetchGetFind(url,find) {
  const key = load('key');
  const options = {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        'Authorization': `${key}`,
    },
  };
  const response = await fetch(`${url}call/find?search=${find}`, options);
  const responseJson = await response.json();
  return responseJson;
}