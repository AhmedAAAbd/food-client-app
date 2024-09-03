<script>
    /** @type {import('./$types').PageData} */
    export let data;
    const dish = data.dish
console.log("[[[inside the component]]]", dish);
</script>


<div>
    <div class="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={dish?.image}
            alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            <div class="badge badge-secondary">{dish?.name}</div>
          </h2>
          <p>{dish?.description}</p>
        </div>
      </div>
</div>