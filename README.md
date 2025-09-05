# UI Kit Bug

A React application demonstrating Google Places UI Kit components with Vite and TypeScript.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- Yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   yarn
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Google Maps API key:

   ```
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   ```

### Running the Application

Start the development server:

```bash
yarn start
```

The application will be available at `http://localhost:5173`

## Environment Variables

- `VITE_GOOGLE_MAPS_API_KEY` - Your Google Maps API key (required for Places functionality)
