const result = document.querySelector('.result')

const url = '/api/3-z-complate'

const resultApi = async () => {
  try {
    const { data } = await axios.get(url)
    if (data.length) {
      getFetch(data)
    } else {
      result.innerHTML = 'There not such product'
    }
  } catch (error) {
    result.textContent = 'Try again later'
  }
}

resultApi()

const getFetch = (date) => {
  const resultI = date
    .map((item) => {
      const { id, name, img, price } = item
      return `<article class="product">
      <a href="product.html?id=${id}">
      <img
      src="${img}"
      alt="${name}"  
      />
        <div class="info">
        <h5>${name}</h5>
        <h5 class="price">$${price}</h5>
        </div>

        </a>  
        </article>`
    })
    .join('')
  result.innerHTML = resultI
}
