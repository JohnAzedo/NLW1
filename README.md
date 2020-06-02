# :rocket: Next Level Week #1

Rockeatseat project on free week of JavaScript knowledge!

## Server 
 
Start your project
````sh
npm init - y
````

Include TypeScript dependences and JavaScript dependences on project
````sh
# JavaScript
npm install express

# TypeScript
npm install ts-node -D
npm install typescript -D
````

Install TypeScript dependences to IntelliSense
````sh
npm install @types/express -D
````

Install this packege to automatically restart the server
````sh
npm install ts-node-dev -D
````

Create a file config to typescript 
````sh
npx tsc --init
````

Use sqlite3 for application database
````sh
npm install sqlite3
````

Install knex to make connection with sqlite3 file
````sh
npm install knex
````

### Run server

Put this command in `package.json`

````js
"scripts": {
    "dev": "ts-node-dev src/server.ts",
    "knex:migrate": "knex migrate:latest --knexfile knexfile.ts migrate:latest"
},
````

Run this command to commit migrations 
````sh
npm run knex:migrate
````

Run this project
````sh
npm run dev
````

## Web

Start yout project
````sh
npx create-react-app web --template=typescript
````

### Run web

````sh
npm start
````