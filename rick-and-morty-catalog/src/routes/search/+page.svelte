<script>
  // @ts-nocheck
  import { enhance } from "$app/forms";
  export let form;
  
</script>

<section>
  <div class="container-fluid">
    <h1>Search for Episodes and Characters</h1>

    <form method="POST" use:enhance class="form_wrapper">
      <div class="container-sm">
        <label for="query">Enter your search:</label>
        <input
          type="text"
          id="query"
          name="query"
          placeholder="Enter at least 3 characters"
          minlength="3"
          required
          class:invalid={form?.error}
        />
        <button type="submit" class="primary">Search</button>
      </div>
    </form>
  </div>

  {#if form?.error}
    <p class="error">{form.error}</p>
  {:else if form}
    {#if form.characters.length === 0 && form.episodes.length === 0}
      <p>No results found.</p>
    {:else}
      <div class="container-fluid">
        <h2>Characters</h2>
        <div class="card_wrapper">
          {#each form.characters as character}
            <a href={"character/" + character.id}>
              <article class="card">
                <header>
                  <img src={character.image} alt={character.name} />
                </header>
                <h3>{character.name}</h3>
                <p>Species: {character.species}</p>
                <footer>Status: <strong>{character.status}</strong></footer>
              </article>
            </a>
          {/each}
        </div>

        <h2>Episodes</h2>
        <div class="card_wrapper">
          {#each form.episodes as episode}
            <a href={"episode/" + episode.id}>
              <article class="card">
                <header>
                  <h3>{episode.name}</h3>
                </header>
                <p>Episode: {episode.episode}</p>
                <footer>Air Date: {episode.air_date}</footer>
              </article>
            </a>
          {/each}
        </div>
      </div>
    {/if}
  {/if}
</section>

<style>
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  a {
    text-decoration: none;
    color: unset;
  }
  .error {
    color: var(--error-color, red);
    text-align: center;
    margin-top: 1rem;
  }

  .form_wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 1rem;
  }

  form {
    margin-bottom: 2rem;
  }

  input {
    padding: 0.75rem;
    font-size: 1rem;
  }

  input.invalid {
    border-color: var(--error-color, red);
  }

  button.primary {
    background-color: var(--primary-color, #007bff);
  }

  button.primary:hover {
    background-color: var(--primary-hover-color, #0056b3);
  }

  .card_wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  .card {
    text-align: center;
    width: 340px;
  }

  .card header img {
    max-width: 100%;
    border-radius: 8px;
  }

  .card h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
  }

  .card footer {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: var(--secondary-text-color, #6c757d);
  }
</style>
