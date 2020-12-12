export async function fetchGetSpecificCategory(url,specCategory) {
  const options = {
    method: 'GET',
    headers: {
       'accept': 'application/json'
    },
  };
  const response = await fetch(`${url}call/specific/${specCategory}`, options);
  const responseJson = await response.json();
  return responseJson;
}