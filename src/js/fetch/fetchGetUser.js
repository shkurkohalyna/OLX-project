export async function fetchGetUser(url) {
  const key = localStorage.getItem('key');
  const options = {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        'Authorization': `${key}`,
    },
  };
  const response = await fetch(`${url}user`, options);
  const responseJson = await response.json();
  return responseJson;
}