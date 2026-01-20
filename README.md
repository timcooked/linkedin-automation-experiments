# LinkedIn Automation (Playwright)

This repository contains a learning project that explores browser-level automation on LinkedIn using Playwright.

The goal of this project is not mass outreach or growth hacking, but to understand how real users interact with complex web applications and how those behaviors can be modeled reliably in code.

---

## Background

The project originally started with an attempt to reverse-engineer LinkedIn’s internal Voyager APIs. That approach turned out to be brittle, undocumented, and difficult to reason about over time.

As a result, the direction shifted to **browser automation**, where the focus is on:
- Working with the actual UI
- Handling real-world state (modals, dropdowns, conditional buttons)
- Modeling user intent instead of relying on undocumented APIs

---

## What this project does

At its current stage, this module can:

- Visit LinkedIn profile pages
- Detect and handle different connection flows  
  - Direct “Connect” button  
  - “More actions → Connect” dropdown path
- Apply conditional logic (connect vs skip)
- Maintain session state using Playwright’s `storageState`
- Interact with the UI in a human-paced manner (scrolling, delays, decision pauses)

This repository represents **one component** of a larger automation system.

---

## How it works (high level)

- **Playwright** is used to control a real browser (non-headless).
- A saved session (`storageState`) is reused to avoid repeated logins.
- Each profile visit is treated as an isolated interaction.
- Actions are gated by UI visibility checks instead of assumptions.
- Timing and scrolling are intentionally human-paced rather than fixed or instantaneous.

The emphasis is on **reliability and behavior modeling**, not speed.

---

## What this project is NOT

- Not a mass outreach tool  
- Not a scraping framework  
- Not production-ready software  
-  Not intended to bypass platform safeguards  

This is an experimental and educational project.

---

## Tech stack

- Node.js
- Playwright

---

## Status

Work in progress.

This module will eventually be orchestrated as part of a larger system with:
- External control (e.g. workflows)
- Data-driven inputs
- Safeguards such as limits and cooldowns

---

## Disclaimer

This project is provided for educational and experimental purposes only.  
It is not intended to violate any platform’s terms of service. Use at your own discretion and responsibility.
