export async function fetchCategory(url) {
    const response = await fetch(`${url}call/categories`);
    const responseJson = await response.json();
    return responseJson
};