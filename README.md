# ExpressHire

## Project Structure

```
ExpressHire/
│
├── express-hire-backend/                # Node.js + Express.js (Backend)
│   ├── app/                # main code
│   ├── database/           # database connectivity
│   └── .env
│
├── ExpressHire-NG/         # Angular 16 (Frontend)
│   ├── src/
│   ├── src/app/            # Angular components, services, etc.
│   └── index.html          # Angular main file
│
└── README.md               # Project Documentation
```

## Prerequisites

Before setting up the project, make sure you have the following software installed:

- Node.js: Download Node.js (Recommended: Version 16 or higher)
- Angular CLI: Run the command below to install Angular CLI
- MongoDB: Download MongoDB and install MongoDB Compass for easy management

## Backend Setup (Node.js + Express.js)

1. Clone the Repository:

```
git clone https://github.com/mayurdehade/ExpressHire.git
cd ExpressHire
```

2. Navigate to the Backend Folder:

```
cd express-hire-backend
```

3. Install Node.js and Express.js Dependencies: Run the following command to install all required dependencies for the backend.

```
npm install
```

4. Start the Backend Server:

```
npm start
```

## Frontend Setup (Angular 16)

1. Install Angular CLI: Run the following command to install Angular CLI globally if not already installed:

```
npm install -g @angular/cli@16.0.3
```

2. Navigate to the Frontend Folder:

```
cd ExpressHire-NG
```

3. Install Angular Dependencies: Install all required packages for the Angular frontend:

```
npm install
```

4. Run Angular Development Server:

```
ng serve -o
```

#### Created By Mayur Dehade
