# 🚀 PipelineGenie (SYS.GENIE v2.0)

![UI Preview](https://img.shields.io/badge/UI-Cyberpunk_Glassmorphism-22D3EE?style=flat-square)
![Frontend](https://img.shields.io/badge/Frontend-React_+_Vite-61DAFB?style=flat-square&logo=react)
![Backend](https://img.shields.io/badge/Backend-Python_FastAPI-3776AB?style=flat-square&logo=fastapi)

**Intelligent CI/CD Pipelines, Generated Instantly.**

PipelineGenie is a full-stack recommendation system designed to automate the DevOps workflow. By analyzing a public GitHub repository, the system intelligently detects the underlying technology stack (e.g., Java/Maven, Python, Node.js) and instantly engineers an optimized, production-ready GitHub Actions YAML pipeline.

## ✨ Features

* **Intelligent Stack Detection:** Automatically parses repository URLs to determine the optimal testing and deployment environments.
* **Instant YAML Generation:** Generates syntax-highlighted, ready-to-copy GitHub Actions workflows complete with dependency caching for faster build times.
* **Decoupled Architecture:** Built with a high-performance Python backend and a lightning-fast React frontend.
* **Next-Gen UI/UX:** Features a custom "Digital Sorcery" aesthetic utilizing glassmorphism, animated aurora gradients, and a native terminal-style output interface.

## 🛠️ Architecture & Tech Stack

* **Frontend:** React.js, Vite, Tailwind CSS (Custom Animations & Keyframes)
* **Backend:** Python, FastAPI, Uvicorn
* **Routing:** Asynchronous REST API communication via standard fetch protocols.
* **Future Roadmap:** The current heuristic, rule-based categorization engine is designed to be easily swapped with a trained Machine Learning classifier (Random Forest/LLM) for highly complex repository structures.

---

## 💻 Getting Started (Local Development)

To run this application locally, you will need to run the backend and the frontend simultaneously in two separate terminal windows.

### 1. Clone the Repository
```bash
git clone [https://github.com/Namannnn24/cicd-recommendation-system.git](https://github.com/Namannnn24/cicd-recommendation-system.git)
cd cicd-recommendation-system
2. Start the Python Backend
Open your first terminal in the root directory and start the FastAPI server:

Bash
# (Optional) Activate your virtual environment if you use one
# Windows: .venv\Scripts\activate
# Mac/Linux: source .venv/bin/activate

# Run the server
uvicorn main:app --reload
The backend will run on http://127.0.0.1:8000
3. Start the React Frontend
Open a second, split terminal, navigate to the frontend folder, and start Vite:

Bash
cd frontend
npm install
npm run dev
The frontend will run on http://localhost:5173
🧪 Testing the Logic
You can test the system's routing logic by inputting different repository types:

Java/Spring (Maven): https://github.com/spring-projects/spring-boot

Python (Pytest): https://github.com/pallets/flask

Generic/Node.js: https://github.com/facebook/react

Built for the future of automated DevOps.
