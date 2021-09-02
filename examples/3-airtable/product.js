const result = document.querySelector('.result')

const resultApi = async () => {
  result.innerHTML = '<h1>Loading...</h1>'
  try {
    const id = window.location.search
    const {
      data: { fields },
    } = await axios.get(`/api/3-z-complate${id}`)
    console.log(fields)
    getFetch(fields)
  } catch (error) {
    result.textContent = `<h2>${error.response.data}</h2>`
  }
}

resultApi()

const getFetch = (date) => {
  const { name, image, price, desc } = date
  const url = image[0].url
  result.innerHTML = ` <h1 class="title">${name}</h1>
  <article class="product">
    <img class="product-img"
    src="${url}"
    alt="${name}"
    />
    <div class="product-info">
      <h5 class="title">${name}</h5>
      <h5 class="price">${price}</h5>
      <p class="desc">${desc}</p>
    </div>
  </article>`
}
