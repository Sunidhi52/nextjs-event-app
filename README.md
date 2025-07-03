# 🎫 Next.js Event Listing App

A responsive and interactive web application built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, designed to list and explore upcoming events across India.

---

## 🧠 Approach

The app was built with a **component-based architecture** using Next.js. It uses a **mock JSON dataset** to render event information dynamically. Routing is handled with **dynamic routes** (e.g., `/events/[id]`) to render detailed pages for each event. The UI is styled with Tailwind CSS and animated using Framer Motion for polished UX.

### Key features:
- Filter events by **location**
- View **event detail pages** with themed or animated backgrounds
- Heart icon to **favorite events**
- Auto-generated **tag badges** like `#Tech`, `#Health`
- Deployed on **Vercel** for easy sharing

---

## 🗂️ Folder Structure

├── components/
│ └── EventCard.tsx # Reusable event card with animation, tags, heart icon
├── data/
│ └── events.json # Mock data with real-life event info
├── pages/
│ ├── index.tsx # Home page with filter + event grid
│ └── events/
│ └── [id].tsx # Dynamic event detail page
├── public/ # Optional static assets
├── styles/ # Global styles or Tailwind setup (if any)
├── types/
│ └── index.ts # TypeScript definitions (EventType)
├── README.md
├── package.json
├── tailwind.config.js
├── tsconfig.json

yaml
Copy
Edit

---

## ⚙️ How to Run the App Locally

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/nextjs-event-app.git
cd nextjs-event-app

2. Install dependencies
bash
Copy
Edit
npm install

3. Start the development server
bash
Copy
Edit
npm run dev
Open your browser at http://localhost:3000

🚀 Live Demo
The app is deployed on Vercel.

🔗 Live URL: https://nextjs-event-app-git-main-sunidhi-sunils-projects.vercel.app

💡 If I Had More Time…
Add login & authentication to allow users to save favorite events

Use localStorage or backend DB for persistent "heart" favorites

Allow users to add new events via a form

Add pagination or infinite scroll for large event datasets

Integrate with an actual events API like Eventbrite or Ticketmaster

Improve accessibility with screen reader support & ARIA roles

Add unit tests using Jest and React Testing Library

🙋‍♀️ Author
Sunidhi Sunil
Full Stack Developer • AI/ML Enthusiast • Creative Coder
This project was built as part of an assignment — using clean code, scalable structure, and great design.