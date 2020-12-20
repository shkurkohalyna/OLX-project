import { load } from "../localStorage";

export async function fetchDeleteFavoriteID(url, id) {
  const key = load('key');
  const options = {
    method: 'Delete',
    headers: {
      'accept': 'application/json',
      'Authorization': `${key}`,
    },
  };
  const response = await fetch(`${url}call/favourite/${id}`, options);
  const responseJson = await response.json();
  return responseJson;
}