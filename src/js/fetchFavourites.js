export default async function fetchFavourites(url, id) {
    const key = localStorage.getItem('key');
    const options = {
  method: 'POST',
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