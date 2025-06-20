let cartContainer = document.querySelector('.cartContainer')

fetch('http://localhost:3001/addcart')
.then(res => res.json())
.then((data) => {
  let cartRemove = data

    if(cartRemove.length === 0){
        cartContainer.textContent = "Your Cart Is Empty"
    }
    else{
        cartContainer.innerHTML = ''
            data.map((products,index) => {
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
    addCart.textContent = "Remove"


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
    cartContainer.appendChild(subContainer)


    let removeBtn = contentDiv.querySelector('.cart-btn')
    removeBtn.addEventListener('click', () => {
      fetch(`http://localhost:3001/addcart/${products.id}`,{
        method: "DELETE"
      })
      .then(res => {
        if(res.ok){
          console.log("user deleted successfully");
          
        }
        else{
          console.log("Error");
          
        }
      })
      console.log(index);
      
    })
    

    
})
    }

   

})

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
