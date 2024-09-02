export async function load({ locals }) {
  console.log('layput server ', locals)
  if (!locals.user) {
    return { user: null }
  }

  return {
    user: locals.user
  }
}
