<script>
  import { user } from "$lib/stores/users.js"; // Correct the store import path
  import { goto } from '$app/navigation';

  export let form;
  
  console.log("return form value", form);
  // Ensure the code only runs in the browser
  if (typeof window !== 'undefined') {
    $: console.log("Ahmed, watch this out", form);

    // Reactive block that runs whenever `form` changes
    $: if (form?.success === true) {
      console.log("form is sucess !!!");
      console.log("Successful login", form);
      user.set(form.payload);
      console.log("check the user store", $user);
      goto("/");  // Client-side navigation to the home page
    }
  }
</script>

<div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">

      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form class="card-body" method="POST" action="?/login">
          <div class="form-control">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" class="input input-bordered" required />
          </div>
          <div class="form-control">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" name="pwd" placeholder="password" class="input input-bordered" required />
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
              <!-- svelte-ignore a11y-invalid-attribute -->
              <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
