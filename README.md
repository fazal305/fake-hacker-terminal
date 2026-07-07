# Fake Hacker Terminal

A cinematic fake terminal simulation built with HTML, CSS, and vanilla JavaScript.

The app displays a looping sequence of fictional command-line activity with typewriter text, progress bars, glitch effects, scan lines, and optional sound. It is designed as a visual demo, not a real hacking tool.

## Live Links

- GitHub Repository: https://github.com/fazal305/fake-hacker-terminal
- Live Demo: https://fazal305.github.io/fake-hacker-terminal/

## Overview

Fake Hacker Terminal is a playful browser project that recreates the look and rhythm of a movie-style terminal. It uses scripted, harmless command text to create a dramatic effect while staying safe and clearly fictional.

This project is useful for practicing DOM updates, timed animations, browser audio, scrolling interfaces, and responsive visual design.

## Features

- Movie-style fake terminal UI
- Typewriter command effect
- Fictional command sequence
- Fake progress bars
- Glitch screen animation
- CRT scan-line overlay
- Optional sound effects
- Infinite looping simulation
- Responsive fullscreen layout
- Reduced-motion support

## Tech Stack

- HTML5
- CSS3
- JavaScript
- DOM manipulation
- Web Audio API

## Folder Structure

```text
fake-hacker-terminal/
  index.html
  hacker-styles.css
  hacker-script.js
  README.md
  LICENSE
```

## Getting Started

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Click `Enable Audio` if you want sound effects.
4. Watch the simulated terminal loop.

No build step or dependencies are required.

## Architecture Notes

The project is split into three main files:

- `index.html` contains the terminal window structure.
- `hacker-styles.css` controls the terminal layout, scan lines, glow effects, and responsive behavior.
- `hacker-script.js` manages the scripted command sequence, typewriter effect, fake progress bars, audio, glitch states, and replay loop.

## Safety Note

This project is a fictional visual simulation. It does not run real commands, scan networks, access files, or perform security testing. The terminal text is intentionally fake and designed for entertainment.

## Accessibility

- The terminal output uses live-region attributes.
- The audio button is keyboard accessible.
- Reduced-motion preferences are respected.
- Text wraps on small screens.

## Performance

The project is lightweight and dependency-free. All effects are handled with CSS animations and small JavaScript timers.

## Lessons Learned

- How to create typewriter-style text output
- How to sequence timed UI events
- How to build fake progress indicators
- How to use the Web Audio API after a user gesture
- How to combine CSS effects for a cinematic interface

## Future Improvements

- Add selectable terminal themes
- Add matrix-style background mode
- Add pause and replay controls
- Add command speed settings
- Add a screenshot-friendly static mode
- Add more fictional command packs

## Fazal Labs Ecosystem

Part of **Fazal Labs** under the **Fun Lab** suite.

This is a playful browser mini-project built to show UI atmosphere, animation sequencing, and vanilla JavaScript interaction.

## License

MIT License
