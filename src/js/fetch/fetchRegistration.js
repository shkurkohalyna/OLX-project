export async function fetchRegistration(url, dataRegistry) {
    const options = {
  method: 'POST',
  body: JSON.stringify(dataRegistry),
  headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'accept': 'application/json',
  },
}
    const response = await fetch(`${url}auth/register`,options);
    const responseJson = await response.json();
    return responseJson
};