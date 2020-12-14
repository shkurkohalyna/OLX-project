import { load } from "../localStorage";

export async function fetchDeleteCallID(url, id) {
  const key = load('key');
  const options = {
    method: 'Delete',
    headers: {
      'Authorization': `${key}`,
    },
  };
  const response = await fetch(`${url}call/${id}`, options);
  const responseJson = await response.json();
  return responseJson;
}