/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, params }) {
  console.log('WWWWWWMMMMMM')
  const accessToken = cookies.get('ato')
  const foodID = params.slug
  console.log('sluggggg', foodID)
  const response = await fetch(`http://localhost:3030/foods/${foodID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  })
  const data = await response.json()

  console.log('{{{😆😆😆😆}}}', data)

  return {
    dish: data
  }
}
