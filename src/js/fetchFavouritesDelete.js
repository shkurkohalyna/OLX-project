import { load } from "./localStorage";

export default async function fetchFavouritesDelete(url, id) {
    const key = load('key');
    const options = {
  method: 'DELETE',
  headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'accept': 'application/json',
      'Authorization': `${key}`
  },
}
    console.log("call:" + `${url}call/favourite/`+id);
    const response = await fetch(`${url}call/favourite/`+id,options);
    const responseJson = await response.json();
    return responseJson
};