export async function fetchGetUserID(url, id) {
  const options = {
    method: 'GET',
    headers: {
        'accept': 'application/json',
    },
  };
  const response = await fetch(`${url}user/${id}`, options);
  const responseJson = await response.json();
  return responseJson;
}