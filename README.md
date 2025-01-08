# rflect

📝 Landing page for a CLI tool focused on providing guided reflections and journaling.

**Links: [NPM Package](https://www.npmjs.com/package/rflect) | [CLI Repository](https://github.com/aniqatc/rflect-cli) | [Landing Page](https://rflect.aniqa.dev)**

<a href="https://rflect.aniqa.dev" target="_blank"><img src="public/rflect-screenshot-zoomed.png"></a>

## Tech

- React
- Vite
- Sass
- Framer Motion

## Libraries & Integrations

- Date-fns for date/time formatting
- Font Awesome for icons
- GitHub API for repository star count
- NPM API for current version
- Ipify API to display visitor's IP address

## Features

### Dynamic Terminal Simulation

- Provides an interactive, scroll-based demonstration of the CLI tool
- Each feature is presented as a live terminal session
- Content appears dynamically as users scroll, mimicking a real terminal experience
- Showcases:
  - Installation process
  - Available commands
  - Sample outputs
  - User interactions

### Key Interactive Elements

- **Scroll-Triggered Content**: Terminal outputs reveal themselves as users scroll
- **Live GitHub Star Counter**: Real-time display of repository stars
- **Live NPM Version**: Real-time display of the current version code for the package
- **Interactive Command Buttons**: One-click copy functionality for each feature's command, starting with the NPM install script provided in the topmost section of the page
- **Custom Modal Component**: Appears on smaller screens, prompting users to view the website on a larger screen for a better experience

## Key Concepts

- Uses Framer Motion with variant objects for customized, sequenced animations
- Uses Framer Motion for scroll-based triggers for animations, in sync with the native CSS scroll-snapping feature
- Uses React state and hooks to manage dynamic content rendering
- Prop drilling used to pass data and callback functions down the component tree (between Feature and Terminal components) to enable the terminal outputs based on the specific feature that is being showcased (which is tracked by scroll position)
- Integrates with GitHub API for live star count
- Implements native clipboard API for one-click command copying

## CLI Capabilities

For more details on the CLI tool itself, visit the [dedicated repository for rflect-cli](https://github.com/aniqatc/rflect-cli).

- Guided writing prompts
- Mood tracking
- Writing stats and insights
- Customizable account settings

## Project Structure

- `components/`: holds all components files, each has its own `index.js` for barrel exports
- `data/`: holds the details relating to each feature (title, description, command, output, metadata, etc)
- `styles/`: holds SCSS partials for each component, global variables file for a consistent theme, and main.scss file

## Available Scripts

Built with [Vite](https://vite.dev/). Available scripts include:

- `npm start`: Start development server
- `npm run build`: Create production build
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier
