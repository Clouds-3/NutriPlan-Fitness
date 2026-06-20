# 🥗 NutriPlan — Automatic Meal Planner

> **Eat well, automatically.** A free static web app that generates personalized meal plans, grocery lists, and calorie targets — no backend, no frameworks, no login required.

🌐 **Live Demo → [clouds-3.github.io/NutriPlan-Fitness](https://clouds-3.github.io/NutriPlan-Fitness/)**

---

## ✨ Features

| Feature | Description |
|---|---|
| 🥗 **Meal Planner** | Generate a personalized daily meal plan based on diet type and calorie goal |
| 🧮 **Calorie Calculator** | BMR/TDEE calculator using the Mifflin-St Jeor equation |
| 🛒 **Grocery List** | Auto-generated shopping list grouped by category with checkboxes |
| 📅 **Weekly Plan** | Full 7-day meal plan with collapsible day rows and weekly totals |
| 🖨️ **Print / PDF Export** | Print-ready layout with toggleable sections |
| 🌙 **Dark Mode** | App-wide dark mode, accent colour picker, and unit preferences |

---

## 🚀 Getting Started

No installation needed. Just open `index.html` in your browser.

```bash
# Clone the repository
git clone https://github.com/Clouds-3/NutriPlan-Fitness.git

# Navigate into the folder
cd NutriPlan-Fitness

# Open in browser
open index.html
```

Or visit the live site directly:
**[https://clouds-3.github.io/NutriPlan-Fitness/](https://clouds-3.github.io/NutriPlan-Fitness/)**

---

## 🗂️ Project Structure

```
NutriPlan-Fitness/
│
├── index.html        # 🥗 Meal Planner (home page)
├── calories.html     # 🧮 BMR / TDEE Calorie Calculator
├── grocery.html      # 🛒 Auto Grocery List with checkboxes
├── weekly.html       # 📅 7-Day Weekly Meal Plan
├── print.html        # 🖨️ Print / PDF Export
├── dark.html         # 🌙 Settings — Dark Mode & Appearance
│
├── common.css        # Shared styles, variables, nav, dark mode
├── data.js           # Meal database, shared functions, nav renderer
│
└── README.md
```

---

## 🛠️ Tech Stack

```
HTML5        →  Semantic pages, print media queries
CSS3         →  Custom properties, Grid, Flexbox, animations
JavaScript   →  Vanilla ES6, DOM manipulation, no frameworks
Google Fonts →  DM Sans + DM Serif Display
```

**Zero dependencies. Zero frameworks. Zero backend.**

---

## ⚙️ How It Works

```
┌─────────────────┐     sessionStorage      ┌──────────────────┐
│  calories.html  │ ──── calorie target ──► │   index.html     │
│  BMR Calculator │                         │   Meal Planner   │
└─────────────────┘                         └──────────────────┘
                                                     │
                                              savePlan()
                                                     │
                          ┌──────────────────────────┼───────────────────┐
                          ▼                          ▼                   ▼
               ┌──────────────────┐     ┌─────────────────┐   ┌──────────────────┐
               │  grocery.html    │     │   weekly.html   │   │   print.html     │
               │  Grocery List    │     │   7-Day Plan    │   │   PDF Export     │
               └──────────────────┘     └─────────────────┘   └──────────────────┘

localStorage  →  dark mode · accent colour · grocery checkboxes (persists across visits)
```

---

## 📄 Pages Overview

### 🥗 `index.html` — Meal Planner
- Choose from 6 diet types: **Balanced, Keto, Mediterranean, Paleo, Vegan, Vegetarian**
- Set daily calorie goal and meals per day (2–5)
- Live macro estimation (Carbs / Protein / Fat) updates per diet
- Click **Generate** → meal cards appear with name, description, macros, and calories
- Links directly to Grocery List and Print pages

### 🧮 `calories.html` — Calorie Calculator
- Enter gender, age, height, weight, activity level, and goal
- Calculates **BMR** and **TDEE** using the Mifflin-St Jeor equation
- Shows three goal targets: Lose weight (−20%), Maintain, Gain muscle (+10%)
- Animated macro breakdown bars
- **"Use in Meal Planner"** button auto-fills the calorie input and generates a plan instantly

### 🛒 `grocery.html` — Grocery List
- Auto-generates from every ingredient in the current meal plan
- Grouped into **Produce, Protein, Dairy, Pantry**
- Tap any item to check it off — progress bar tracks completion
- Checked state saved to `localStorage` — survives page refresh
- One-click print button

### 📅 `weekly.html` — Weekly Plan
- Generates a full **7-day meal plan** at once
- Today's date is auto-detected and highlighted
- Collapsible day rows — click any day to expand meals
- Weekly nutrition totals summary (avg calories, carbs, protein, fat)

### 🖨️ `print.html` — Print / PDF Export
- Live print preview of the current meal plan
- Toggle: meal descriptions, macros, grocery list, daily totals
- Clean `@media print` CSS hides nav and controls
- Save as PDF via browser print dialog

### 🌙 `dark.html` — Settings
- Dark mode toggle — saved to `localStorage`, applies on every page
- Accent colour picker — 6 colour options using CSS custom properties
- Units preference (Metric / Imperial)
- Browser notification toggle

---

## 🧠 data.js — The Brain

All shared logic lives in one file imported by every page:

| Function | What it does |
|---|---|
| `mealDB` | 60+ dishes across 6 diets × 5 meal slots with full nutrition data |
| `renderNav(page)` | Builds the sticky nav and highlights the active page |
| `generatePlan(diet, cal, count)` | Picks random meals, scales macros to calorie target |
| `categorizeIngredient(item)` | Maps ingredients to Produce / Protein / Dairy / Pantry |
| `savePlan() / loadPlan()` | Reads/writes meal plan to `sessionStorage` |
| Appearance IIFE | Applies dark mode + accent colour on every page load before render |

---

## 👥 Team

| Member | Responsibility |
|---|---|
| Member 1 | Architecture, data.js, GitHub Pages deployment |
| Member 2 | Meal Planner (index.html), diet cards, plan generation |
| Member 3 | Calorie Calculator (calories.html), BMR formula, auto-redirect |
| Member 4 | Grocery List (grocery.html), categorization, progress tracking |
| Member 5 | Weekly plan, Print export, Dark mode & Settings |

---

## 🌐 Deployment

Hosted on **GitHub Pages** — free static hosting, zero configuration.

```bash
# Make changes and push to update the live site
git add .
git commit -m "Your update message"
git push
```

GitHub Pages auto-deploys on every push to `main`. Live in ~60 seconds.

---

## 📝 License

This project is open source and free to use for learning and personal projects.

---

<div align="center">

Built with ❤️ using pure HTML, CSS & JavaScript

⭐ **Star this repo if you found it useful!**

[🌐 Live Demo](https://clouds-3.github.io/NutriPlan-Fitness/) · [🐛 Report Bug](https://github.com/Clouds-3/NutriPlan-Fitness/issues) · [💡 Request Feature](https://github.com/Clouds-3/NutriPlan-Fitness/issues)

</div>
