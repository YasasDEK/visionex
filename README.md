# VisionEx - Swimlane Dashboard

A modern, responsive task management dashboard built with Next.js, featuring drag-and-drop functionality and real-time search.

## Features

### ✨ Core Features

- **Swimlane Task Board**: Organize tasks across four status columns (To Do, In Progress, Approved, Reject)
- **Drag & Drop**: Seamlessly move tasks between swimlanes with smooth animations
- **Real-time Search**: Filter tasks dynamically as you type in the search bar
- **Data Persistence**: All task changes are automatically saved to localStorage
- **Responsive Design**: Fully responsive layout down to 768px (tablet and mobile)
- **Mock API**: Task data loaded from JSON file simulating an API response

### 🎨 UI/UX

- Pixel-perfect implementation based on Figma design
- Clean, modern interface with TailwindCSS
- Smooth transitions and hover effects
- Cross-browser compatible
- Color-coded swimlanes for visual clarity
- Avatar groups for team member display
- Task metadata (attachments, comments, due dates, etc.)

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

## Key Features Breakdown

### 1. State Management (Zustand)

The application uses Zustand for centralized state management with localStorage persistence:

- `tasks`: Array of all tasks
- `searchQuery`: Current search filter
- `filteredTasks`: Tasks filtered by search query
- `moveTask()`: Updates task status when dragged
- `setSearchQuery()`: Filters tasks based on search input
- `initializeTasks()`: Loads tasks from JSON or localStorage

### 2. Drag & Drop (@dnd-kit)

Implements smooth drag-and-drop functionality:

- Tasks can be dragged between any swimlane
- Visual feedback during drag (opacity change)
- Drag overlay shows card preview
- Status automatically updates on drop
- Changes persist to localStorage

### 3. Search Functionality

Real-time search feature:

- Filters tasks as user types
- Case-insensitive matching
- Searches task titles
- Updates all swimlanes dynamically
- Maintains state during drag operations

### 4. Data Persistence

All changes are automatically saved:

- localStorage integration via Zustand persist middleware
- Task status updates persist across page reloads
- Initial data loaded from `tasks.json`
- Subsequent changes stored in browser

### 5. Responsive Design

Mobile-first approach with breakpoints:

- Sidebar hidden on mobile (<768px)
- Header adjusts for smaller screens
- Swimlanes scroll horizontally on mobile
- Touch-friendly interactions
- Optimized spacing and sizing

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

## Data Structure

Each task contains:

```typescript
{
  id: string;              // Unique identifier
  title: string;           // Task name
  status: TaskStatus;      // 'todo' | 'inprogress' | 'approved' | 'reject'
  category: TaskCategory;  // Task category/type
  assignees: Assignee[];   // Team members assigned
  attachments?: number;    // Number of attachments
  comments?: number;       // Number of comments
  dueDate?: string;        // Due date (if any)
  priority: TaskPriority;  // 'low' | 'medium' | 'high'
  // ... additional optional fields
}
```

## Customization

### Adding New Tasks

Edit `src/data/tasks.json` and add new task objects to the `tasks` array.

### Changing Swimlane Columns

Modify the swimlane definitions in `src/components/Board.tsx`:

```tsx
<Swimlane title="Your Title" status="your-status" tasks={getTasksByStatus('your-status')} />
```

### Styling

All styles use TailwindCSS utility classes. Modify component files or extend `tailwind.config.ts` for custom themes.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Next.js App Router for optimal performance
- Turbopack for faster development builds
- Component-based architecture for code splitting
- Efficient re-rendering with Zustand selectors
- Optimized drag-and-drop with @dnd-kit

## Future Enhancements

Potential features for future releases:

- [ ] Backend API integration
- [ ] User authentication
- [ ] Real-time collaboration
- [ ] Task comments and attachments
- [ ] Advanced filtering options
- [ ] Dark mode support
- [ ] Export/import functionality
- [ ] Task analytics dashboard

## License

This project is part of a technical assessment for VisionEx.

## Contact

For questions or feedback, please reach out to the development team.

---

**Note**: This is a demonstration project built as part of a technical assessment. The design is based on the provided Figma mockup.

