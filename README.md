# Mohamad Arafan — Portfolio

A responsive, dark/light portfolio built with **React 18 + Vite**, with **Framer Motion** for a few
entrance animations and **React Icons** for icons. No UI framework: all styling is plain CSS in
`src/index.css`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

Requires Node.js 18 or newer.

## Project structure

```
portfolio/
├── index.html                 # title, meta description, Open Graph, fonts, theme pre-load script
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── cv/Mohamad_Arafan_CV.pdf   # PLACEHOLDER: replace with your real CV (same file name)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css              # all styles, organised by section
    ├── assets/images/         # profile.svg + one placeholder preview per project
    ├── data/
    │   ├── profile.js         # name, bio, email, social links, counters  <- start here
    │   ├── projects.js        # project cards + filter names
    │   ├── skills.js          # skill groups, icons and levels
    │   ├── services.js        # "What I Do" cards
    │   └── education.js       # degree, institution, areas of study
    ├── hooks/
    │   ├── useTheme.js        # dark/light mode saved in localStorage
    │   └── useActiveSection.js# highlights the current section in the navbar
    └── components/
        ├── Navbar.jsx  Hero.jsx  About.jsx  Skills.jsx  Projects.jsx
        ├── Education.jsx  Journey.jsx  Services.jsx  Contact.jsx  Footer.jsx
        ├── ScrollToTop.jsx
        └── (shared) ProjectCard.jsx  SectionHeading.jsx  Reveal.jsx  Counter.jsx
                     SocialLinks.jsx  ThemeToggle.jsx
```

## Replace these placeholders before you publish

Nothing below was invented on your behalf, so each item needs your real details.

| What | Where |
| --- | --- |
| Email address (`your.email@example.com`) | `src/data/profile.js` → `email` |
| GitHub, LinkedIn, Facebook, Instagram URLs | `src/data/profile.js` → `social` |
| Profile photo | Add it to `src/assets/images/` and change the import at the top of `profile.js` |
| CV | Overwrite `public/cv/Mohamad_Arafan_CV.pdf` |
| "Years Learning" and "GitHub Projects" counters | `src/data/profile.js` → `stats` |
| Project screenshots | Replace the SVGs in `src/assets/images/` (16:10, about 800×500, `.webp` or `.jpg`) and update `image` in `projects.js` |
| Project GitHub / Live Demo links | `src/data/projects.js` → `github`, `demo`. Empty links render as disabled buttons, so nobody hits a dead link |
| Skill levels | `src/data/skills.js` → `level` (1 to 5). Set these honestly |
| Education dates (optional) | `src/data/education.js` → `period` |
| Open Graph URL and image | The commented tags in `index.html`, once you have a domain |

"Projects Completed" and "Technologies Learned" are counted automatically from `projects.js` and `skills.js`.

## Contact form

The form validates on the client (name, email format, subject, message length). There is no backend
yet, so a valid submission opens the visitor's email app with the message pre-filled, addressed to
`profile.email`.

To send messages from the site itself, replace the `mailto:` block in `Contact.jsx` with a `fetch()`
call to either:

- an Express endpoint of your own (a good MERN practice project, using Nodemailer), or
- a form service such as Formspree or EmailJS.

## Deploy

Vercel or Netlify work with zero configuration: import the repo, build command `npm run build`,
output directory `dist`.

## Notes

- Dark theme is the default; the choice is saved as `portfolio-theme` in localStorage and applied
  before first paint to avoid a flash.
- Animations are limited to the hero entrance, scroll reveals, and project filtering. Everything
  respects `prefers-reduced-motion`.
- Images below the fold use `loading="lazy"` and explicit width/height to avoid layout shift.
- Keyboard: skip link, visible focus rings, `aria-current` on the active nav item, and an Escape key
  handler for the mobile menu.
