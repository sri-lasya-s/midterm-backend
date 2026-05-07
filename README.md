Midterm 
# UX Research Study Tracker API

## Project Overview

This project is a contract-first REST API application built for managing UX research studies.

The application allows users to:

* Create studies
* View all studies
* View active studies
* Get a study by ID
* Update a study
* Delete a study

The project follows a contract-first development approach using OpenAPI.

---

# Technologies Used

## Backend

* Node.js
* Express.js
* Supabase
* Swagger UI
* OpenAPI Specification

## Frontend

* Vite
* JavaScript
* Generated OpenAPI SDK

## Deployment

* Azure App Service
* Azure Static Web Apps

---

# Features

* Contract-first API design
* OpenAPI YAML specification
* Swagger documentation
* Generated SDK client
* Full CRUD operations
* Supabase database integration
* Frontend using generated SDK instead of fetch
* Active studies custom endpoint

---

# Database Schema

## studies table

| Column       | Type    |
| ------------ | ------- |
| id           | integer |
| studyTitle   | text    |
| method       | text    |
| participants | integer |
| status       | text    |

---

# API Endpoints

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| GET    | /               | Get all studies    |
| GET    | /active-studies | Get active studies |
| GET    | /{id}           | Get study by ID    |
| POST   | /               | Create study       |
| PATCH  | /{id}           | Update study       |
| DELETE | /{id}           | Delete study       |

---

# OpenAPI Generator Command

```bash
openapi-generator-cli generate \
-i openapi.yaml \
-g javascript \
-o generated-client
```

---

# Environment Variables

Create a `.env` file in the backend project root.

## .env


SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
PORT=3000


---

# .env.example


SUPABASE_URL=
SUPABASE_KEY=
PORT=3000


---

# Backend Setup

## Install dependencies


npm install


## Run backend


npm start


## Swagger Documentation


http://localhost:3000/docs


---

# Frontend Setup

## Navigate to frontend


cd frontend


## Install dependencies


npm install


## Run frontend


npm run dev


---

# SDK Integration

The frontend uses the generated SDK instead of raw fetch calls.

Example SDK usage:


api.studyServiceList()
api.studyServiceCreate()
api.studyServiceGet()
api.studyServiceUpdate()
api.studyServiceDelete()


---

# Azure Deployment

## Backend Deployment

Deploy backend to Azure App Service.

## Frontend Deployment

Deploy frontend to Azure Static Web Apps.

Build command:


npm run build


Publish directory:


dist


---

# Live URLs

## Frontend
https://ux-study-frontend.onrender.com/



## Backend
https://midterm-backend-skbz.onrender.com



## Swagger
https://midterm-backend-skbz.onrender.com/docs

















===========



In this assignment, I built a REST API for a UX Research Study Tracker. The API allows users to create, view, update, and delete studies, and 
also includes a custom endpoint to show active studies. I chose this domain because I am interested in UX and it felt easier for me to understand 
compared to other options. I used Node.js, Express, and openapi-backend to build the API. At first, I did not fully understand how everything works, 
but as I followed the steps, I learned how to connect the OpenAPI file with the backend code and how the endpoints work.
One important thing I learned is the contract-first approach. Instead of writing code first, I had to define the API in a YAML file. 
This file controls how the API behaves, including validation. Because of this, I did not need to write manual validation code, and the API automatically 
returned errors like 400 when the input was wrong. I faced several challenges while working on this assignment. I was confused about how to connect operationIds, 
how to test using Swagger UI, and how to fix errors. Deployment was also difficult at first, especially setting up GitHub and Render. But after trying step by step,
I was able to complete it. Compared to writing code first, I think the contract-first approach is more structured because it clearly defines what the API should do 
before coding. Even though it was confusing in the beginning, it helped me understand how APIs are designed and tested.
Overall, this assignment helped me learn how to build and deploy an API, even though I found some parts difficult.

-------

