# Service Worker & Offline Caching Showcase

An extracted, standalone module from a larger production application, isolated here to demonstrate hands-on Service Worker implementation — offline caching strategy, cache lifecycle management, and update handling in a React app.

> **Note:** This repository is a focused excerpt of a larger private codebase, kept small on purpose to highlight one specific piece of engineering rather than a full product.

## What this demonstrates

- Custom Service Worker registration and lifecycle handling (install → activate → fetch)
- Cache strategy design: what gets cached, when it's invalidated, and how stale content is avoided
- Automated update detection so users don't get stuck on an outdated cached version
- Styled, component-based UI built with `styled-components`

## Tech Stack

- React
- Styled Components
- Service Worker API (custom implementation)

## Why it's structured this way

The original project is private (client/company codebase), so this repo contains only the self-contained piece relevant to Service Worker behavior, with any project-specific business logic removed.

## Running locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) and check the Application tab in DevTools to inspect the registered Service Worker and cache storage.

---
*Part of a larger banking/fintech platform — extracted for demonstration purposes only.*
