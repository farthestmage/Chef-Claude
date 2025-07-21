# Chef-Claude

An AI-powered recipe generator that suggests delicious dishes based on the ingredients you have on hand. Built with React, Vite, and the Mistral language model.

---

## ✨ Features

* **AI-powered recipe creation**: Enter your available ingredients and receive full recipe suggestions, including steps and serving sizes.
* **Dynamic ingredient input**: Easily add or remove items as you type—no reloading needed.
* **Auto-scroll to recipe**: Once generated, the page smoothly scrolls to your recipe output.
* **Responsive UI**: Designed to work beautifully across mobile, tablet, and desktop interfaces.

---

## 🛠️ Tech Stack

* **Frontend**

  * React
  * Vite (for fast HMR & bundling)
  * React Markdown (for rendering recipe output)
* **AI Integration**

  * Mistral model (hosted locally or via API proxy)
* **Backend**

  * Serverless or lightweight backend to handle Mistral API calls

---

## 🧰 Project Structure

```
/src
├── components/
│   ├── Header.jsx           # App title & branding
│   ├── IngredientsList.jsx  # Input interface for drafting ingredients
│   ├── Recipe.jsx           # Displays the generated recipe
│   └── Main.jsx             # Central orchestration & state logic
├── App.jsx                  # Root component
├── main.jsx                 # React app entry point
└── index.css                # Global styles
```

---

## ⚖️ Prerequisites

1. **Node.js** v16+ and **npm**
2. **Mistral API** (self-hosted or via third-party API)
3. Configure your backend/serverless functions to securely handle API requests

---

## ⚙️ Setup Instructions

1. Clone the repo:

```bash
git clone https://github.com/farthestmage/Chef-Claude.git
cd Chef-Claude
```

2. Install dependencies:

```bash
npm install
```

3. Set your API key (in `.env`, serverless secrets, etc.):

```
HUGGING FACE ACESS TOKEN
```

4. Run in development mode:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to explore.

5. Build for production:

```bash
npm run build
npm run preview
```

---

## 📡 API Usage

* User submits a list of 4+ ingredients.
* Backend uses Mistral to produce a well-formatted markdown recipe.
* Frontend renders the recipe and scrolls into view.

---

## 📖 Why Chef-Claude?

This project demonstrates:

* **React state management** with Hooks
* **Async/Await** for clean data fetching
* **AI prompt engineering** tailored for cooking
* **Simple backend integration** for custom LLM use

---




