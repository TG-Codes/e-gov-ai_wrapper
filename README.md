# AI FAQ Assistant

This is a simple, beginner-friendly demo project that integrates the Gemini API (via Google) with a Node.js backend and a basic frontend.

---

## 🚀 What Does It Do?

This app allows users to ask public service questions (like "How do I renew my driver's license?"), and get answers from Google's Gemini API.

---

## 📁 Project Structure

```
project-root/
│
├── backend/
│   ├── server.js          # Node.js backend
│   └── ai_service.py      # Python AI service calling Gemini API
│
├── frontend/
│   ├── index.html         # Frontend UI
│   └── styles.css         # Styles
│
└── README.md
```

---

## 🛠️ Step-by-Step Setup (For Beginners)

### 1️⃣ Clone the Project

```bash
git clone https://github.com/TG-Codes/e-gov-ai_wrapper.git
cd e-gov-ai_wrapper
```

### 2️⃣ Install Node.js Dependencies

```bash
npm install express
```

### 3️⃣ Install Python Dependencies

It's **best** to use a virtual environment:

```bash
# Create a virtual environment
python3 -m venv venv

# Activate the virtual environment:
# macOS/Linux:
source venv/bin/activate
# Windows:
.env\Scriptsctivate

# Install the Gemini package
pip install google-generativeai
```

Alternatively, you can install globally (not recommended):
```bash
pip install google-generativeai
```

---

## 🔑 4️⃣ Generate Your Gemini API Key

- Visit [Google AI Studio (Gemini API)](https://makersuite.google.com/app/apikey).
- Copy your API key.
- Open `backend/ai_service.py` and replace `'YOUR_API_KEY'` with your actual key.

---

## 5️⃣ Run the Python Script Manually (Test)

You can test the AI service standalone:

```bash
python3 backend/ai_service.py "How do I renew my driver's license in Nigeria?"
```

If the setup is correct, it will print the answer to the terminal.

---

## 6️⃣ Start the Node.js Server

```bash
node backend/server.js
```

You should see:
```
Server running at http://localhost:3000
```

---

## 7️⃣ Access the App

Visit:
```
http://localhost:3000
```

---

## ❗ Common Errors and Solutions

### ❌ Error: `AI Service error`
- Ensure your API key is valid and placed correctly in `ai_service.py`.
- Confirm the Python package is installed (`pip install google-generativeai`).
- Check that your Python script runs correctly (step 5).
- Make sure you’re running both frontend and backend from the same server (`http://localhost:3000`).

### ❌ 405 Error (Method Not Allowed)
- Don’t use VS Code Live Server (port 5500).
- Access the app through Node.js’s static hosting (`http://localhost:3000`).

---

## 📚 Resources

- **Gemini API Key Generation:** [Google AI Studio](https://makersuite.google.com/app/apikey)
- **Gemini API Docs:** [Vertex AI Gemini](https://cloud.google.com/vertex-ai/generative-ai/docs/overview)

---


Let’s build responsible AI for public service! 🌟
