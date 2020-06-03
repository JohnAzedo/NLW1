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
npm install cors

# TypeScript
npm install ts-node -D
npm install typescript -D
npm install @types/cors -D
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
    "dev": "ts-node-dev --ignore-watch node_modules src/server.ts",
    "knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
    "knex:seed": "knex --knexfile knexfile.ts seed:run"
},
````

Run this command to commit migrations 
````sh
npm run knex:migrate
````

Run this command to send seeds to database
````sh
npm run knex:seed
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

Install package to icons
````sh
npm install react-icons
`````

### Run web

````sh
npm start
````