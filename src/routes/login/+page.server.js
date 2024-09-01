import { error, redirect } from '@sveltejs/kit'
import { v4 as uuidv4 } from 'uuid' // UUID generator for unique session IDs
import { sessions } from '$lib/sessionStore' // Import the shared session store
// src/routes/(app)/login/+page.server.js
export async function load({ locals }) {}

export const actions = {
  login: async ({ request, locals }) => {
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
    console.log('>>>xx<<<', user.accessToken)
    if (user) {
      locals.user = user
      return { success: true, payload: user, error: null }
    } else {
      return { success: false, payload: null, error: response.status }
    }
  }
}
