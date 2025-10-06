# 🎬 goodmoov

A modern movie discovery platform built with Nuxt 4, Vue 3, and TMDB API. Browse, search, and discover your next favorite movie with a beautiful purple-themed dark UI.

---

## ✨ Features

- 🎥 **Browse Movies** - Explore popular and latest movies with beautiful cards
- 🎭 **Genre Filter** - Dynamic filtering by genre (Action, Drama, Comedy, etc.)
- 🔍 **Search** - Real-time search with instant results
- 📱 **Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎬 **Movie Details** - View full information including cast, rating, and runtime
- 🎪 **Hero Carousel** - Auto-playing showcase of trending movies
- 💾 **Smart Caching** - Fast loading with Tanstack Query

---

## 🖼️ Website Views

<h3 align="center">1. Homepage - Hero & Genre Filter</h3>
<p align="center">
    <img width="700" src="/assets/images/readme/homepage1.png" alt="Homepage1"/>
    <img width="700" src="/assets/images/readme/homepage2.png" alt="Homepage2"/>
</p>

<h3 align="center">2. Search Movies Result</h3>
<p align="center">
    <img width="700" src="/assets/images/readme/searchMovies.png" alt="Search Movies"/>
</p>

<h3 align="center">3. Movie Detail Page</h3>
<p align="center">
    <img width="700" src="/assets/images/readme/detailMovie.png" alt="Movie Detail"/>
    <img width="700" src="/assets/images/readme/detailMovie2.png" alt="Movie Detail 2"/>
</p>

<h3 align="center">4. Genre Filtering</h3>
<p align="center">
    <img width="700" src="/assets/images/readme/searcGenre.png" alt="Search Genre Movie"/>
</p>

---

## 🛠 Tech Stack

- **Nuxt 4** - Vue.js Framework
- **Vue 3** - Composition API
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Tanstack Query** - Data fetching & caching
- **TMDB API** - Movie database

---

## 📁 Project Structure

```
goodmoov-app /
├── components/
│   ├── common/          # Header, Footer
│   ├── features/        # MovieCard, GenreCarousel, HeroCarousel
│   └── ui/              # Button, Input (from shadcn)
├── composables/         # useMovieApi
├── pages/
│   ├── index.vue        # Homepage
│   ├── movie/[id].vue   # Movie detail
│   ├── search.vue       # Search page
│   └── about.vue        # About page
├── plugins/             # vue-query setup
├── types/               # TypeScript definitions
└── .env                 # Environment variables
```

---

## 🚀 Installation

```bash
# Clone repository
git clone https://github.com/yourusername/goodmoov.git
cd goodmoov

# Install dependencies
npm install

# Setup environment variables
# Create .env file with:
NUXT_PUBLIC_TMDB_API_KEY=your_api_key
NUXT_PUBLIC_TMDB_ACCESS_TOKEN=your_access_token

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 🔑 Get TMDB API Keys

1. Sign up at [TMDB](https://www.themoviedb.org/)
2. Go to [API Settings](https://www.themoviedb.org/settings/api)
3. Request API key
4. Copy API Key and Access Token to `.env`

---

## 📖 Usage

### Homepage

- Browse popular and latest movies
- Click genre buttons to filter
- Auto-playing hero carousel

### Search

- Click search icon in header
- Type movie title and press Enter

### Movie Details

- Click any movie card
- View cast, rating, runtime, genres
- See recommended movies

---

## 📦 Scripts

```bash
npm run dev      # Development server
npm run build    # Build for production
npm run preview  # Preview production build
```
