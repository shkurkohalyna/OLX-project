const load = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

// Принимает ключ `key` и значение `value`.
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};
// Принимает ключ и удаляет его
const remove = key => {
  try {
    localStorage.setItem(key);
  } catch (err) {
    console.error('Remove state error: ', err);
  }
};

export default { load, save, remove };