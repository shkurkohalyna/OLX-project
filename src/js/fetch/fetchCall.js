export async function fetchCall(url,page) {
  const key = localStorage.getItem('key');
  const options = {
    method: 'GET',
    headers: {
       'accept': 'application/json',
      'Authorization': `${key}`,
    },
  };
  const response = await fetch(`${url}call?page=${page}`, options);
  const responseJson = await response.json();
  return responseJson;
}