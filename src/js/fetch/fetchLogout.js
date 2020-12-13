import { load, remove } from "../localStorage";

export async function fetchLogout(url) {
  const key = load('key');
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': `${key}`,
    },
  };
  const response = await fetch(`${url}auth/logout`, options);
  // const responseJson = await response.json();
  remove('key');
  return response;
}
