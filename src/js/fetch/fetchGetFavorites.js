export async function fetchGetFavorites(url) {
  const key = localStorage.getItem('key');
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