
// async function getData(){
//     let res=await fetch('https://jsonplaceholder.typicode.com/users')
//     let data=await res.json()
//     let box=document.createElement('div')
//     let details=''
//     data.forEach((v,i)=>{
//         details+=`<p>Name- ${v.name} and email- ${v.email}</p>`
//     })
//     box.innerHTML=details
//     document.body.append(box)
// }

// async function getData(){
//     try {
//         let res=await fetch('https://jsonplaceholder.typicode.com/users')
//         let data=await res.json()
//         let box=document.createElement('div')
//         let details=''
//         data?.forEach((v,i)=>{
//             details+=`<p>Name- ${v.name} and email- ${v.email}</p>`
//         })
//         box.innerHTML=details
//         document.body.append(box)

//     } catch (error) {
//         console.log(error)
//     }      
// }
// getData()

// let ol = document.querySelector('ol');
// fetch('https://fakestoreapi.com/docs')
//     .then(res => res.json())
//     .then(data => {
//         data.forEach((v, i) => {
//             let li = document.createElement('li');
//             li.innerText = `${v.name}, ${v.id}, ${v.username}`;
//             ol.append(li);
//         });
//     });



// async function getData(){
//     try {
//         let res=await fetch('https://fakestoreapi.com/products')
//         let data=await res.json()
//         let card=document.createElement('div')
//         let details=''
//         data?.forEach((v,i)=>{
//             details+=`<p>Name- ${v.title} and title- ${v.price} and category${v.category} and ${image}</p>`
//         })
//         document.body.querySelectorAll

//     } catch (error) {
//         console.log(error)
//     }      
// }
// getData()




(async function fetchProducts() {
    fetch('https://fakestoreapi.com/products') // Fake Store API endpoint
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(products => {
            displayProducts(products);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
})();

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = createProductCard(product);
        productList.appendChild(productCard);
    });
}

function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';

    const card = document.createElement('div');
    card.className = 'card h-100';

    const cardImg = document.createElement('img');
    cardImg.className = 'card-img-top';
    cardImg.src = product.image;
    cardImg.alt = product.title;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerText = product.title;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerText = product.description;

    const cardPrice = document.createElement('p');
    cardPrice.className = 'card-text';
    cardPrice.innerHTML = `<strong>Price:</strong> $${product.price}`;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardPrice);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
}


