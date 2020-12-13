import { load } from "../localStorage";

export async function fetchAuthenRefresh(url) {
    const key = load('key');
    const sid = load('sid');
    const options = {
  method: 'POST',
  body: JSON.stringify({ sid: sid }),
  headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'accept': 'application/json',
      'Authorization': `${key}`,
  },
}
    const response = await fetch(`${url}auth/refresh`,options);
    const responseJson = await response.json();
    return  responseJson
};