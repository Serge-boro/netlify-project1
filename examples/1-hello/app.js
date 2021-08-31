const result = document.querySelector('.result')

const fetchDate = async () => {
  try {
    // const { data } = await axios.get('/.netlify/functions/1-hello')
    const { data } = await axios.get('/api/1-hello')
    // const respons = await fetch('/.netlify/functions/1-hello')
    // const data = await respons.json()
    console.log(data)
    result.textContent = data
  } catch (error) {
    console.log(error.response)
    result.textContent = error.response.data
  }
}

fetchDate()
