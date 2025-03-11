# Data Flow Diagram (DFD) for Theme App

## Level 0 (Context Diagram)
```
+------------------+
|      User       |
+------------------+
         ↕
+------------------+
| Theme Provider   |
+------------------+
         ↕
+------------------+
|  React Router    |
+------------------+
         ↕
+------------------+
|   Components     |
+------------------+
```

## Level 1 (Detailed Flow)
```
+------------------+
|      User       |
+------------------+
         ↓
+------------------+
|  Theme Context   |
+------------------+
         ↓
+------------------+
|     Navbar      |
+------------------+
         ↓
+-------------------------+
|    Route Handler        |
|-------------------------|
| LoadableComponent       |
+-------------------------+
         ↓
+-------------------------+
|     Page Components     |
|-------------------------|
| - Home                 |
| - About                |
| - Contact             |
+-------------------------+
```

## Component Flow Details

1. **Theme Context Flow**
   - ThemeProvider wraps entire application
   - Manages theme state (light/dark)
   - Provides theme context to all child components

2. **Navigation Flow**
   - Navbar provides navigation interface
   - Router handles URL changes
   - LoadableComponent dynamically loads pages

3. **Component Loading**
   - LoadableComponent handles lazy loading
   - Pages load on demand
   - Improves initial load performance

4. **Route Structure**
   - / → Home page
   - /about → About page
   - /contact → Contact page

