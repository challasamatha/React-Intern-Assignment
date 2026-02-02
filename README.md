🚀 React Developer Intern Assignment

Vasundharaa Geo Technologies Pvt. Ltd.

A single-page React application built as part of the React Developer Intern assignment.
This project demonstrates core React fundamentals including state management, side effects, form validation, dynamic UI updates, LocalStorage persistence, and modular component architecture.

📌 Project Overview

This application consists of five independent tasks, each designed to assess a specific React skill:

Enhanced Todo App

Form Handling & Validation

Dynamic Multi-Input Progress Bar

Advanced Countdown Timer

Live Search with Highlighting

The project is built using React (Vite) and follows a clean, scalable folder structure.

🛠️ Tech Stack
Technology	Purpose
React (Vite)	Frontend Framework
JavaScript (ES6+)	Application Logic
Tailwind CSS	Styling
React Hooks	State & Side Effects
LocalStorage API	Data Persistence
Node.js (18+)	Runtime Environment

📂 Project Structure
src/
├── components/
│   ├── Todo/
│   │   ├── TodoApp.jsx
│   │   ├── TodoItem.jsx
│   │   └── FilterControls.jsx
│   ├── Forms/
│   │   └── UserForm.jsx
│   ├── Progress/
│   │   └── MultiProgressBar.jsx
│   ├── Timer/
│   │   └── CountdownTimer.jsx
│   └── Search/
│       └── SearchList.jsx
├── hooks/
│   └── useLocalStorage.js
├── App.jsx
├── main.jsx
└── index.css

⚙️ Installation & Setup
Prerequisites

Node.js v18.x or above

npm or yarn

Steps to Run Locally
# Clone the repository
git clone https://github.com/your-username/react-intern-assignment.git


# Navigate to project folder
cd react-intern-assignment


# Install dependencies
npm install


# Start development server
npm run dev

The application will run on:

http://localhost:5173
📘 Task Breakdown
✅ Task 1: Enhanced Todo App
Features

Add new tasks

Mark tasks as completed

Filter tasks (All / Active / Completed)

Persist tasks using LocalStorage

Concepts Used

useState

useEffect

Conditional rendering

Custom useLocalStorage hook

✅ Task 2: Form Handling & Validation
Features

Controlled form inputs

Inline validation messages

Email validation using Regex

Password visibility toggle

Concepts Used

Controlled components

Form validation

Conditional error rendering

✅ Task 3: Dynamic Multi-Input Progress Bar
Features

Multiple numeric inputs

Dynamic progress bar calculation

Color change based on value threshold

Concepts Used

Array state management

.map() rendering

Inline dynamic styles

✅ Task 4: Advanced Countdown Timer
Features

Start / Pause functionality

Millisecond-level countdown

Auto-cleanup of intervals

Concepts Used

setInterval

useEffect cleanup

Time-based state updates

✅ Task 5: Live Search with Highlighting
Features

Real-time search filtering

Case-insensitive matching

Highlight matched text

Display result count

Concepts Used

Regex string splitting

Dynamic JSX rendering

Array filtering

🧠 Key React Concepts Demonstrated

Functional Components

React Hooks (useState, useEffect)

LocalStorage persistence

Reusable & modular components

Controlled forms

Dynamic UI updates

Clean and scalable folder structure

🧪 Performance & Best Practices

✔ Cleans up intervals on unmount
✔ Avoids multiple timers running simultaneously
✔ Optimized rendering using state isolation
✔ Mobile-responsive layout
✔ Beginner-friendly, readable code

📸 Screenshots of Todo, Form, Progress bar, search bar 
<img width="1920" height="1080" alt="Screenshot (88)" src="https://github.com/user-attachments/assets/fb9185c0-6fe1-4694-a395-5c5622365b96" />
<img width="1920" height="1080" alt="Screenshot (89)" src="https://github.com/user-attachments/assets/8f90a2ae-d5e6-4d42-9026-c081d800b6e4" />


🚀 Possible Enhancements

Dark mode toggle

Convert project to TypeScript

Add unit tests

Persist timer state in LocalStorage

Deploy using Vercel or Netlify

📄 License

This project is created solely for internship evaluation purposes.

🙋‍♀️ Author

Challa Samatha
samathachowdary2004@gmail.com
React Developer Intern Applicant

