// src/hooks.server.js
import { sessions } from '$lib/sessionStore' // Import the shared session store

export async function handle({ event, resolve }) {
  const sessionId = event.cookies.get('session_id')

  if (sessionId && sessions.has(sessionId)) {
    event.locals.user = sessions.get(sessionId)
  } else {
    event.locals.user = null
  }

  return resolve(event)
}
