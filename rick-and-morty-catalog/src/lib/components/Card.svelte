<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let imageUrl: string = "";
  export let link: string = "";
</script>

<a href={link} class="card-container">
  <article class="card">
    {#if imageUrl}
      <img src={imageUrl} alt={title} class="card-image" />
    {/if}
    <header>{title}</header>
    {#if subtitle}
      <p class="card-subtitle">{subtitle}</p>
    {/if}
  </article>
</a>

<style>
  .card-container {
    text-decoration: none;
    color: inherit;
  }

  .card {
    padding: 1rem;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.3s,
      box-shadow 0.3s;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .card-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }

  .card header {
    font-size: 1.2rem;
    font-weight: bold;
    color: #007bff;
  }

  .card-subtitle {
    font-size: 1rem;
    color: #555;
  }
</style>
