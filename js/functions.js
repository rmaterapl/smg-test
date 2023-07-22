const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const fetchButton = document.querySelector('#getData');
const dataTable = document.querySelector('#dataTable');
const tableHead = document.querySelector('#tableHead');

const sendHttpRequest = (url) => {
  return fetch(url).then((response) => {
    return response.json();
  });
};

const fetchProducts = async () => {
  const responseData = await sendHttpRequest('https://dummyjson.com/products');
  const productList = responseData.products;
  console.log(productList[0]);
  const testObject = productList[0];
  const keys = Object.keys(testObject);
  for (const key of keys) {
    const th = document.createElement('th');
    th.innerHTML = key;
    tableHead.appendChild(th);
  }
  for (const product of productList) {
    const tr = document.createElement('tr');
    for (const key of keys) {
      const td = document.createElement('td');
      td.innerHTML = product[key];
      tr.appendChild(td);
    }
    dataTable.appendChild(tr);
    dataTable.classList.remove('hide');
  }
};

toggleButton.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

fetchButton.addEventListener('click', fetchProducts);
