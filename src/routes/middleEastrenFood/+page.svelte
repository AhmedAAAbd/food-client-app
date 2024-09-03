<script>
    export let data;
    const foods = data.foods
console.log("[[[inside the component]]]", foods);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each foods as dish}
      <a href="/dish/{dish._id}" class="no-underline">
        <div class="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={dish.image}
              alt="{dish.name}" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {dish.name}
              <div class="badge badge-secondary">{dish.origin}</div>
            </h2>
            <p>{dish.description}</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
  
