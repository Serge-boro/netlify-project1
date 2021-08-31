//domain/.netlify/functions/1-hello

person = { name: 'Serhii' }
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: 'Our Netlify Function Example 112',
    // body: JSON.stringify(person),
  }
}
