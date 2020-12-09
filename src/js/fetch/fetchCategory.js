export default async function fetchTest(url) {
    const response = await fetch(`${url}call/categories`);
    const responseJson = await response.json();
    return responseJson
};