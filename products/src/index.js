import {commerce} from 'faker'

let products = '';

for (let i = 0; i < 5; i++) {
  const name = commerce.productName();
  const price = commerce.price();
  products += `<li>${name} - ${price}</li>`;
}

document.querySelector('#dev-products').innerHTML = products;