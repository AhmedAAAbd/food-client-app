// src/routes/+layout.js

import { user as userStore } from '$lib/stores/users.js'

export function load({ data }) {
  const { user } = data // Get the user data from the server-side layout load function

  if (user)
    //other components expect user.user
    user.user = user
  console.log('>>>😀🤡😀🤡😀🤡', user)
  // Update the Svelte store with the user data
  userStore.set(user)

  return {
    user // Optionally pass the data further down to the page
  }
}
