/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  const accessToken = cookies.get('ato')
  const response = await fetch('http://localhost:3030/foods', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  })
  const data = await response.json()

  console.log('{{{😆😆😆😆}}}', data)

  return {
    foods: data.data
  }
}
