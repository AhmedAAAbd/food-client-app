// src/hooks.server.js

export async function handle({ event, resolve }) {
  const token = event.cookies.get('ato')
  console.log('hooks running 🍡')
  console.log(':::::', token)
  if (token) {
    try {
      const response = await fetch('http://localhost:3030/user-by-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      })
      const user = await response.json()
      console.log('😀🤡😀🤡😀🤡', user)
      if (!user.isAuthorized) {
        event.locals.user = null
      } else {
        event.locals.user = user
      }
    } catch (error) {
      console.error('Token verification failed:', error)
      event.locals.user = null // Clear user if token is invalid
    }
  }

  const response = await resolve(event)
  return response
}
