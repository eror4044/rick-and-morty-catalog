Rick and Morty Catalog
This is a SvelteKit-based project that showcases episodes, characters, and seasons of the popular Rick and Morty series. It uses the Rick and Morty GraphQL API for data retrieval.

🚀 Features
Browse all seasons and their episodes.
View episode details, including characters featured in each episode.
View character details, including their appearances across episodes.
Search functionality for episodes and characters using GraphQL.
Clean and responsive UI using PicoCSS.
Progressive form enhancement with loading state handling.
📦 Tech Stack
Framework: SvelteKit
GraphQL Client: URQL
Styling: PicoCSS
API: Rick and Morty GraphQL API
Hosting: Cloudflare Pages
Type Safety: TypeScript
🔧 Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/rick-and-morty-catalog.git
cd rick-and-morty-catalog
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Open the app in your browser:

arduino
Copy code
http://localhost:5173
📂 Project Structure
plaintext
Copy code
src/
│
├── lib/                        # Reusable components and utilities
│   ├── components/             # Universal UI components
│   │   ├── Card.svelte         # Reusable Card component
│   │   └── GridContainer.svelte# Grid layout for displaying items
│   ├── graphql/                # GraphQL queries and client setup
│   │   ├── client.ts           # URQL GraphQL client configuration
│   │   └── queries.ts          # GraphQL queries
│   ├── models/                 # TypeScript models for type safety
│   │   ├── Character.ts
│   │   ├── Episode.ts
│   │   └── Season.ts
│   └── utils/                  # Utility functions
│       └── formatDate.ts       # Date formatting utility
│
├── routes/                     # Application routes
│   ├── +layout.svelte          # App layout with navigation
│   ├── +page.svelte            # Home page: seasons overview
│   ├── search/                 # Search functionality
│   │   └── +page.svelte
│   ├── character/              # Character details
│   │   └── [characterId]/+page.svelte
│   └── season/                 # Season and episode details
│       └── [seasonId]/+page.svelte
│
├── static/                     # Static assets (e.g., images, icons)
└── README.md                   # Project documentation
🌐 GraphQL API Endpoints
1. Search
Search episodes and characters:
graphql
Copy code
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
2. Episode Details
Fetch episode details by ID:
graphql
Copy code
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
3. Character Details
Fetch character details by ID:
graphql
Copy code
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
🛠️ Deployment
The project uses Cloudflare Pages for deployment.

Steps for Deployment:
Push your code to GitHub.
Link the repository to Cloudflare Pages.
Specify the build command:
bash
Copy code
npm run build
Set the output directory to:
bash
Copy code
.svelte-kit/output
🧪 Testing
Run the app locally and test all routes:

Home Page: View seasons.
Search: Verify search functionality.
Character Details: Check character information and episodes.
Episode Details: Verify episode data and character list.
🤝 Contributions
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature/your-feature
Commit your changes:
bash
Copy code
git commit -m "Add new feature"
Push to your branch:
bash
Copy code
git push origin feature/your-feature
Submit a Pull Request.
📄 License
This project is licensed under the MIT License.

🎉 Acknowledgements
SvelteKit
URQL
Rick and Morty API
PicoCSS
