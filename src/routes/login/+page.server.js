// src/routes/(app)/login/+page.server.js
export async function load({ locals }) {}

export const actions = {
  login: async ({ cookies, request, locals }) => {
    const data = await request.formData()
    const email = data.get('email')
    const password = data.get('pwd')

    const response = await fetch('http://localhost:3030/authentication', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ strategy: 'local', email, password })
    })
    const user = await response.json()
    console.log('>>>xx<<<', user)
    if (user.code !== 401) {
      // Set the token in a cookie
      cookies.set('ato', user.accessToken, {
        httpOnly: true, // Ensures the cookie is sent only by the server
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/', // Cookie is valid for the entire site
        secure: process.env.NODE_ENV === 'production', // Use secure flag in production
        sameSite: 'lax' // Controls how cookies are sent with cross-site requests
      })

      return { success: true, payload: user, error: null }
    } else {
      return { success: false, payload: null, error: response.status }
    }
  }
}
