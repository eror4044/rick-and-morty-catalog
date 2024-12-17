# 🎥 **Rick and Morty Catalog**

This project is a **SvelteKit**-based catalog application that displays **episodes**, **characters**, and **seasons** from the popular *Rick and Morty* series. Data is retrieved dynamically using the **Rick and Morty GraphQL API**.

---

## 🚀 **Features**

- 🗂 **Seasons and Episodes**: Browse all seasons and their corresponding episodes.  
- 🧑 **Characters**: View character details, including their status, species, and episode appearances.  
- 🔍 **Search Functionality**: Search for characters and episodes using GraphQL.  
- 💻 **Progressive Enhancement**: Smooth form interactions with **loading states**.  
- 🎨 **Responsive UI**: Built with **PicoCSS** for clean, modern styling.  

---

## 📦 **Tech Stack**

| **Technology**  | **Description**                               |
|------------------|-----------------------------------------------|
| **SvelteKit**   | Framework for building modern web apps.       |
| **GraphQL**     | Query and fetch data efficiently.             |
| **URQL**        | Lightweight GraphQL client for SvelteKit.     |
| **PicoCSS**     | Minimalist, responsive CSS framework.         |
| **TypeScript**  | Ensures type safety across the application.   |
| **Cloudflare**  | Deployed using Cloudflare Pages.              |

---

## 🔧 **Setup and Installation**

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/rick-and-morty-catalog.git
   cd rick-and-morty-catalog
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   ```
   http://localhost:5173
   ```

---

## 📂 **Project Structure**

```plaintext
src/
│
├── lib/                        # Shared libraries
│   ├── components/             # Reusable UI components
│   │   ├── Card.svelte         # Card component for items
│   │   └── GridContainer.svelte# Grid layout for collections
│   ├── graphql/                # GraphQL configuration
│   │   ├── client.ts           # URQL client setup
│   │   └── queries.ts          # GraphQL queries
│   ├── models/                 # Type definitions
│   │   ├── Character.ts        # Character type
│   │   ├── Episode.ts          # Episode type
│   │   └── Season.ts           # Season type
│   └── utils/                  # Utility functions
│       └── formatDate.ts       # Format date utility
│
├── routes/                     # SvelteKit routes
│   ├── +layout.svelte          # Main layout
│   ├── +page.svelte            # Home page: seasons overview
│   ├── search/                 # Search functionality
│   │   └── +page.svelte
│   ├── character/              # Character details
│   │   └── [characterId]/+page.svelte
│   └── season/                 # Season and episode pages
│       └── [seasonId]/+page.svelte
│
├── static/                     # Static assets
└── README.md                   # Project documentation
```

---

## 🌐 **GraphQL Queries**

### 1. **Search Query**

```graphql
query ($name: String!) {
  characters(filter: { name: $name }) {
    results {
      id
      name
      image
      status
    }
  }
  episodes(filter: { name: $name }) {
    results {
      id
      name
      episode
      air_date
    }
  }
}
```

### 2. **Episode Details**

```graphql
query ($id: ID!) {
  episode(id: $id) {
    id
    name
    episode
    air_date
    characters {
      id
      name
      image
    }
  }
}
```

### 3. **Character Details**

```graphql
query ($id: ID!) {
  character(id: $id) {
    id
    name
    status
    species
    gender
    image
    episode {
      id
      name
      episode
    }
  }
}
```

---

## 🛠️ **Deployment**

The project is deployed using **Cloudflare Pages**.

### Build Instructions:
1. Specify the build command:
   ```bash
   npm run build
   ```
2. Output directory:
   ```
   .svelte-kit/output
   ```

3. Link the repository to **Cloudflare Pages** and deploy.

---

## 🎯 **How to Use**

1. **Home Page**: Browse available seasons.  
2. **Season View**: Click on a season to view episodes and characters.  
3. **Episode View**: Explore episode details and the characters in it.  
4. **Character View**: See character-specific details and the episodes they appear in.  
5. **Search**: Use the search bar to find episodes or characters.

---

## 🤝 **Contributing**

Contributions are welcome! Here's how you can help:

1. **Fork** the repository.
2. Create a new **feature branch**:
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. **Push** to your branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a **Pull Request**.

---

## 📄 **License**

This project is licensed under the **MIT License**.

---

## 🎉 **Acknowledgements**

Special thanks to:
- [SvelteKit](https://kit.svelte.dev/)
- [Rick and Morty API](https://rickandmortyapi.com/)
- [URQL](https://formidable.com/open-source/urql/)
- [PicoCSS](https://picocss.com/)
