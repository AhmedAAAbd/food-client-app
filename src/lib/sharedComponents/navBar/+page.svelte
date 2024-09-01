<!-- src/routes/(app)/login/+page.svelte -->
<script>
  import { user } from "$lib/stores/users.js"; // Import the user store
  console.log(":x:x:x:", $user);
    
    console.log("😀😀😀😀😀", user);
    $: console.log("::::", user);
</script>
  
  <div class="container mx-auto">
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">daisyUI</a>
      </div>
  
      {#if !user}
      <!-- Show login/signup buttons when no user is logged in -->
      <div class="px-2">
        <a href="/login" class="btn btn-neutral mx-2">Log in</a>
        <a href="/sign-up" class="btn btn-primary">Sign up</a>
      </div>
      {:else}
      <!-- Show profile dropdown when user is logged in -->
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a>Settings</a></li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
      {/if}
    </div>
  </div>
  