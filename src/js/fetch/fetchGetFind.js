export async function fetchGetFind(url,find) {
  const key = localStorage.getItem('key');
  const options = {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        'Authorization': `${key}`,
    },
  };
  const response = await fetch(`${url}call/find?search=${find}`, options);
  const responseJson = await response.json();
  return responseJson;
}