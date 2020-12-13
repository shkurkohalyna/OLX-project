export async function fetchAuthenGoogle(url) {
  const response = await fetch(`${url}auth/google`);
  const responseJson = await response.json();
  return responseJson;
}