
# Zerodha

The Zerodha Clone is a web-based trading dashboard built using the MERN stack. It replicates the fundamental functionality of the Zerodha trading platform, allowing users to create an account, Login, and see their watchlist, holdings, and positions. The project includes interactive graphs to visualize stock data and provides a smooth user experience for tracking stock market activities.


## Live Demo

You can see the Live preview here 
[Harshit's Zerodha](https://zerodha-frontend-m41e.onrender.com/)


## Purpose and Scope :

The primary objective of this project is to create a functional trading dashboard that mimics Zerodha’s interface and core features. This project aims to:

- Enable users to authenticate securely.

- Provide a dashboard with essential stock market data such as watchlist, holdings, and positions.

- Display financial data using interactive charts and graphs.

- Store user data securely in MongoDB.

## Key Features :

- User authentication (Signup/Login with JWT tokens)

- Watchlist for favorite stocks

- Holdings and positions management

- Interactive charts using React charting libraries

- Fully functional dashboard UI
## Tech Stack

**Frontend:** 
- React.js
- Bootstrap for UI styling
- React-charting libraries for data visualization

**Backend:** 
- Node 
- Express

**Database Management:**
- MongoDB (for storing user authentication data, holdings, positions, and watchlist)

**Authentication**

- JWT (JSON Web Tokens) for session management

**Deployment**
- Render.com


##  Features and Functionality

**Landing Page**

- UI mimics the original Zerodha site.

- Users can navigate to the signup/login page.

**User Authentication**

- Users can sign up and log in using JWT-based authentication.

- Authenticated users receive a token and are redirected to the dashboard.

**Dashboard**

- Watchlist: Users can track their favorite stocks.

- Holdings Data: Displays stock holdings and their performance.

- Positions Data: Tracks open market positions.

- Additional Pages: Includes Apps, Orders, and other relevant sections.

- Graphs and Data Visualization: Stock trends and market performance are displayed using interactive graphs.

**Database Handling**

- MongoDB is used to store user credentials, watchlist, holdings, and positions securely.

## System Architecture

- High-Level System Design

- The frontend communicates with the backend using API requests.

- The backend processes these requests, interacts with the MongoDB database, and responds with data.

- Authentication is managed through JWT tokens to ensure secure user sessions.

## Flow of Data

- User logs in/signup, and the credentials are authenticated via JWT.

- After authentication, the user is redirected to the dashboard.

- API calls fetch stock data from MongoDB.

- The dashboard displays the fetched data in relevant sections.

##  Limitations and Future Scope

**Current Limitations**

- The project is not responsive according to various screen sizes.

- Real-time stock price updates are not implemented.

**Future Enhancements**

- Make the platform responsive for mobile and tablet users.

- Integrate live stock market data.

- Improve UI/UX for better user experience
## Installation

**Prerequisites**

Ensure the following software is installed:

- Node.js

- MongoDB

**Setup Steps**

1. Clone the repository:

```bash
  git clone <repository-url>

```
2. Install dependencies:
```bash
    cd frontend
    npm install
```
```bash
    cd..
    cd frontend
    npm install
```
3. Setup environment variables (.env file):
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Start the Backend server
```bash
cd Backend
npm start
```
5. Start the frontend:
```bash
cd..
cd frontend
npm start
```
6. Access the application at (http://localhost:3000).
## Contact Me :

Feel free to reach out to me:

Email: harshitrastogi0206@gmail.com

LinkedIn: https://www.linkedin.com/in/harshit-2003-rastogi/

GitHub: https://github.com/Harshit-Rastogi-01


