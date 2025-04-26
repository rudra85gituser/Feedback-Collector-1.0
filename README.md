# 📝 Feedback Collector (Dark Themed)

A modern, dark-themed feedback collector with a minimalistic and responsive design. It includes both frontend and backend features to handle feedback submissions and provide an admin view for managing entries.

## 🔍 Overview

This project allows users to submit feedback via a simple and clean interface. The submitted feedback can be viewed by an admin through a toggleable view. All data is stored using JSON-based storage through backend APIs.

---

## ✨ Features

### 🌑 Frontend

- **Modern dark theme** with gradient highlights
- Fully responsive layout built using **Tailwind CSS**
- Accessible **Feedback Form** with:
  - Full Name (Text input)
  - Email (Validated input)
  - Feedback message (Textarea)
  - Submit button with loading animation
- **Admin Panel**:
  - Toggle button: _"View Submitted Feedback"_
  - Feedback displayed in stylish cards
  - Displays **timestamps** using relative time formatting
- **User Experience Enhancements**:
  - Toast notifications for success and errors
  - Form validation with intuitive error prompts
  - Micro animations for better interaction

---

### 🔧 Backend

- API routes using **Next.js Server Actions**
- Endpoints:
  - `POST /submit-feedback`: Stores feedback in a local JSON file
  - `GET /feedbacks`: Retrieves all submitted feedback
- JSON-based storage for quick and easy deployment

---

## 🚀 Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: React Hooks
- **UI Enhancements**: Toast notifications, transitions, responsive design

---

## 🛠 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/feedback-collector.git
   cd feedback-collector
