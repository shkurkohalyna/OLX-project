import { load } from "../localStorage";

export async function fetchPostCall(url, data) {
    const key = load('key');
    const options = {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
      'Content-Type': 'multipart/form-data; charset=UTF-8',
      'accept': 'application/json',
      'Authorization': `${key}`,
  },
}
    const response = await fetch(`${url}call`,options);
    const responseJson = await response.json();
    return responseJson
};