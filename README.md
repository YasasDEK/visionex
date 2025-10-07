# VisionEx - Swimlane Dashboard

## Tech Stack

- **Framework**: Next.js 15.5.4 (with Turbopack)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **State Management**: Zustand
- **Drag & Drop**: @dnd-kit
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd visionex
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main dashboard page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Board.tsx         # Main board with DnD context
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── Header.tsx        # Top header with search
│   ├── Swimlane.tsx      # Individual swimlane column
│   └── TaskCard.tsx      # Task card component
├── store/
│   └── taskStore.ts      # Zustand store for state management
├── data/
│   └── tasks.json        # Mock task data
└── types/
    └── task.ts           # TypeScript type definitions
```

## Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```
