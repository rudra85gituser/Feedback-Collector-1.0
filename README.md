# 🚀 Simplified Feedback Collector

A clean and responsive feedback collector application built with **React (Next.js)**, **JavaScript**, and **custom CSS**. This micro-app allows users to submit feedback and includes an admin view to manage all submissions — all within a sleek, modern interface.

---

## 🎯 Project Objective

To create a minimal, yet professional feedback collection application that allows users to submit their name, email, and a short message — with a admin view to see all submissions.

---

### ✅ Added:
- Plain JavaScript with clean, readable logic
- Custom CSS with responsive styling
- Custom-built toast system and UI components

---

## 💡 Features

- ✅ **Feedback Form** with:
  - Full Name
  - Email (with validation)
  - Feedback message
  - Submit button with loading state
- 🔁 **Toggle Admin View**
  - Displays all submitted feedback
- 🕶 **Modern Dark UI**
  - Purple and blue gradient accents
  - Dark theme using CSS variables
- 🔔 **Custom Toast Notifications**
- 🕒 **Relative Timestamps**
- 📱 **Responsive Design**
- ⚠️ **Error Handling and Validation**

---

## 📁 File Structure

```plaintext
app/
├── page.jsx           # Main component with form and admin view
├── actions.js         # Handles server actions for feedback submission
├── api/
│   └── feedbacks/
│       └── route.js   # API endpoint for extensibility
└── layout.jsx         # Root layout file

styles/
└── main.css           # Global styles and custom theme
