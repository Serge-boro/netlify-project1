const result = document.querySelector('.result')
const url = '/api/2-basic-api'

const resultApi = async () => {
  try {
    const response = await fetch(url)
    const date = await response.json()
    if (date.length) {
      getFetch(date)
    } else {
      result.innerHTML = 'There not such product'
    }
    console.log(date)
  } catch (error) {
    result.textContent = 'Try again later'
  }
}

resultApi()

const getFetch = (date) => {
  const resultI = date
    .map((item) => {
      const {
        name,
        image: { url },
        price,
      } = item
      return `<article class="product">
      <img
        src="${url}"
        alt="${name}"
      />
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">$${price}</h5>
      </div>
    </article>`
    })
    .join('')
  result.innerHTML = resultI
}
