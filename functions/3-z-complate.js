require('dotenv').config()
const Airtable = require('airtable-node')
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appI3bAu9hLRjjlFB')
  .table('serverless2')

exports.handler = async (event, context) => {
  const { id } = event.queryStringParameters
  if (id) {
    try {
      const product = await airtable.retrieve(id)
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id: ${id}`,
        }
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Server Error',
      }
    }
  }
  try {
    const { records } = await airtable.list()
    const products = records.map((item) => {
      const { id } = item
      const { name, image, price } = item.fields
      const img = image[0].url
      return { id, name, img, price }
    })
    console.log(products)
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server Error',
    }
  }
}
