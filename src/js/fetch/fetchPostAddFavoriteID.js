import { load } from "../localStorage";

export async function fetchPostAddFavoriteID(url, id) {
  const key = load('key');
  const options = {
    method: 'Post',
    headers: {
      'accept': 'application/json',
      'Authorization': `${key}`,
    },
  };
  const response = await fetch(`${url}call/favourite/${id}`, options);
  const responseJson = await response.json();
  return responseJson;
}