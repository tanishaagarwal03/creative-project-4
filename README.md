# Creative Project 4: 'X' Store API (not finalised yet)

## Overview
This project implements a **Store API** using **Node.js** and **Express** to support a simple front-end that interacts with the API through AJAX and fetch.

## Goals
- Build a Node.js/Express web service to expose game data via multiple endpoints.
- Dynamically load data on the front-end using `fetch`.
- Provide both JSON and plain text responses from the API.
- Implement proper error handling with descriptive messages for invalid requests.

## Features (possible features if a game store is implemented - not finalised yet)

### API Endpoints
1. **`GET /products`**
   - **Description**: Retrieve a list of all games available in the store.
   - **Query Parameters**:
     - `platform` (optional): Filter games by platform (e.g., `"PS5", "Xbox"`).
     - `price_min` (optional): Minimum price filter.
     - `price_max` (optional): Maximum price filter.
   - **Response**: JSON array of game objects.

2. **`GET /reviews`**
   - **Description**: Retrieve reviews for games.
   - **Query Parameters**:
     - `platform` (optional): Filter reviews for games on a specific platform.
     - `sort` (optional): Sort reviews by `"date"` or `"rating"`.
   - **Response**: JSON array of review objects.

3. **`POST /reviews`**
   - **Description**: Submit a new review for a game.
   - **Request Body**:
     - `game_id` (required): ID of the game being reviewed.
     - `rating` (required): Numeric rating (1-5).
     - `review` (required): Text of the review.
   - **Response**: Confirmation message and review details on success.

### Error Handling (to be finalised with group)
- **400 Bad Request**: Invalid or missing parameters in client request.
- **404 Not Found**: Game or review does not exist.
- **500 Internal Server Error**: Issues with server or data processing.

## Possible File Structure
```
cp4/
├── public/
│   ├── index.html           # Main page for interacting with the API
│   ├── styles.css           # Front-end styling
│   ├── scripts/
│   │   ├── main.js          # Client-side JS to interact with API
│   │   └── utils.js         # Helper functions (e.g., error handling)
├── data/
│   ├── games.json           # JSON file storing game data
│   ├── reviews.json         # JSON file storing reviews
├── app.js                   # Node.js/Express web service
└── package.json             # Node.js project configuration
``` 


## API Documentation
API details, including request/response schemas and example usage, are documented in `APIDOC.md`.

## Citations
All third-party libraries and resources are properly cited in the footer of the application or source files.

## Authors
This project was collaboratively developed by the CS 132 CP4 team.

