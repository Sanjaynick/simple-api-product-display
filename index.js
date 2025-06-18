let container = document.querySelector('.container')
let search = document.querySelector('.search')
let searchBtn = document.querySelector('.search-btn')
let logoutBtn = document.querySelector('.logout-btn')
let userIcon = document.querySelector('.user')
let logoName = document.querySelector('.username')


userIcon.addEventListener('click', () => {
  logoutBtn.style.display = 'block'
  setTimeout(() => {
    logoutBtn.style.display = 'none'
  }, 2000)
})

logoutBtn.addEventListener('click', () => {
  window.location.href = 'index.html'
})



fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then((data) => {
    productList(data)

    searchBtn.addEventListener('click', () => {
      let filter = data.filter((y) => y.price >= search.value)
      search.value = ''
      container.textContent = ''
      productList(filter)
    })

  });

function productList(product) {
  product.map((products) => {

    let subContainer = document.createElement('div')
    subContainer.classList.add('product-con')

    let imageDiv = document.createElement('div')
    imageDiv.classList.add('image-container')

    let productImg = document.createElement('img')
    productImg.classList.add('product-img')
    productImg.src = products.image

    let contentDiv = document.createElement('div')
    contentDiv.classList.add('content-div')

    let titles = document.createElement('p')
    titles.classList.add('title')
    titles.innerHTML = `${products.title.slice(0, 20)}...`

    let categorys = document.createElement('p')
    categorys.classList.add('categorys')
    categorys.innerHTML = products.category


    let descriptions = document.createElement('p')
    descriptions.classList.add('description')
    descriptions.innerHTML = `${products.description.slice(0, 25)}....`

    let priceDiv = document.createElement('div')
    priceDiv.classList.add('price-div')


    let prices = document.createElement('p')
    prices.classList.add('price')
    prices.innerHTML = `${products.price} $`

    let ratings = document.createElement('p')
    ratings.classList.add('rating')
    let fullStar = Math.floor(products.rating.rate)
    let emptyStar = 5 - fullStar
    ratings.innerHTML = '★'.repeat(fullStar) + '☆'.repeat(emptyStar) + `   ${products.rating.count}`

    let addCart = document.createElement('button')
    addCart.classList.add('cart-btn')
    addCart.textContent = "Add To Cart"


    let toolTip = document.createElement('div')
    toolTip.classList.add('tool-tip')
    toolTip.textContent = products.description

    descriptions.addEventListener('click', () => {
      toolTip.style.display = 'flex'
      setTimeout(() => {
        toolTip.style.display = 'none'
      }, 2000)
    })

    imageDiv.appendChild(productImg)
    subContainer.appendChild(imageDiv)
    contentDiv.appendChild(titles)
    contentDiv.appendChild(categorys)
    contentDiv.appendChild(priceDiv)
    priceDiv.appendChild(prices)
    priceDiv.appendChild(ratings)
    contentDiv.appendChild(descriptions)
    contentDiv.appendChild(addCart)
    contentDiv.appendChild(toolTip)
    subContainer.appendChild(contentDiv)
    container.appendChild(subContainer)


// Add to cart Function
    const button = contentDiv.querySelector('.cart-btn');
    button.addEventListener('click', () => {
      let cartHTML = JSON.parse(localStorage.getItem('cartHTML')) || [];
      cartHTML.push(subContainer.outerHTML);
      localStorage.setItem('cartHTML', JSON.stringify(cartHTML));
      alert("added to cart!");
    });


  })
}

//  Three lines display on responsive
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});





