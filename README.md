
# 🌾 Agriculture Crop Recognition using Computer Vision

## Project Overview

This project presents a smart crop recognition system built with **Computer Vision** and **Deep Learning** to accurately identify different types of crops from images. It aims to support users—especially in agricultural and educational settings—by offering **real-time crop identification** through an intuitive web interface.

---

## Core Components

### 🔍 Deep Learning Model – VGG16
A fine-tuned **VGG16** model is used to classify crop images into five categories:
- Rice
- Sugarcane
- Wheat
- Maize
- Jute

The model is enhanced using **transfer learning** for improved accuracy on agricultural datasets.

---

### 🔙 Backend API – Flask
- Developed using **Flask** to serve a lightweight and fast REST API.
- Accepts **image paths** and returns the predicted **crop class**.
- Easily integrable with various frontend platforms.

---

### 🖥️ Frontend Interface – Next.js
- Built with **Next.js** for a modern and responsive user experience.
- Users can **upload or select images** to receive predictions.
- Includes a **"Crop Guessing Game"** to engage users in a fun way while testing their crop knowledge against the AI model.

---

## 🚀 Key Features
- ✅ Real-time crop prediction
- 🎮 Educational and interactive crop guessing game
- 🔗 Seamless communication between frontend and backend
- 🧱 Modular architecture using Flask and Next.js

---

## Usage

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started (Frontend)

First, run the development server:

```bash
cd frontend

npm install

npm run dev
# or
yarn dev
# or
pnpm dev

## Usage

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash

npm install 

npm run dev
# or
yarn dev
# or
pnpm dev
```

