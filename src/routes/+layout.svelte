<!-- src/routes/(app)/login/+page.svelte -->
<script>
  import "../app.css";
  import { user } from "$lib/stores/users.js"; // Import the user store
  console.log("::layout", $user);

  import NavBar from "$lib/sharedComponents/navBar/+page.svelte"; // Import NavBar component
</script>

<NavBar />
<slot />
