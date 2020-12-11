export async function fetchGetOwn(url) {
  const key = localStorage.getItem('key');
  const options = {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        'Authorization': `${key}`,
    },
  };
  const response = await fetch(`${url}call/own`, options);
  const responseJson = await response.json();
  return responseJson;
}