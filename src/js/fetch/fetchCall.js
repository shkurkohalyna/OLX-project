export async function fetchCall(url,page) {
  const options = {
    method: 'GET',
    headers: {
       'accept': 'application/json'
    },
  };
  const response = await fetch(`${url}call?page=${page}`, options);
  const responseJson = await response.json();
  return responseJson;
}