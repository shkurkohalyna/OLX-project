import { load } from "../localStorage";

export async function fetchGetFavorites(url) {
  const key = load('key');
  const options = {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        'Authorization': `${key}`,
    },
  };
  const response = await fetch(`${url}call/favourites`, options);
  const responseJson = await response.json();
  return responseJson;
}