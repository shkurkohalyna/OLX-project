import getRefs from "./refs";
import { API_OLX } from "./url";
/*ещё не работает*/
const refs = getRefs();
console.log(refs.btnSubmitCreate);
refs.btnSubmitCreate.addEventListener('submit', postSubmitCreate)

async function postSubmitCreate(event) {
    event.preventDefault();
    const dataField = {
        /** заглушка*/
    title: 'Logo',
    description: 'Logo for Instagram',
    category: 'business and services',
    price: 100,
    phone: '+380971468686',
    file: files
    }
    console.log(dataField);
    fetchPostCall(API_OLX, dataField).then(console.log)
}