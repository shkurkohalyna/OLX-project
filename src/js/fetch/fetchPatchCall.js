import { load } from "../localStorage";

export async function fetchPatchCall(url, data, id) {
    const key = load('key');
    const options = {
  method: 'Patch',
  body: JSON.stringify(data),
  headers: {
      'Content-Type': 'multipart/form-data; charset=UTF-8',
      'accept': 'application/json',
      'Authorization': `${key}`,
  },
    }
    const response = await fetch(`${url}call/${id}`,options);
    const responseJson = await response.json();
    return responseJson
};