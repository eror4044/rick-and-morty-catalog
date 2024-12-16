<script>
  export let data;
</script>

{#if data.episode}
  <h1>{data.episode.name}</h1>
  <p><strong>Air Date:</strong> {data.episode.air_date}</p>
  <p><strong>Episode:</strong> {data.episode.episode}</p>

  {#if data.episode.characters && data.episode.characters.length > 0}
    <h2>Characters</h2>
    <div class="grid">
      {#each data.episode.characters as character}
        <a href="/character/{character.id}">
          <article class="card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
          </article>
        </a>
      {/each}
    </div>
  {:else}
    <p>No characters available for this episode.</p>
  {/if}
{:else}
  <p>Loading episode data...</p>
{/if}

<style>
  h1 {
    margin-top: 1rem;
    color: #333;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  .card {
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.3s,
      box-shadow 0.3s;
  }

  .card img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin-top: 0.5rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #555;
  }
</style>
