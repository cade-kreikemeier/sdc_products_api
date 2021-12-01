# Atelier

This project is a redesigning of the API service for a mock e-commerce single page app for the Hack Reactor software engineering immersive program.

This repo contains the code for node servers as well as a PostgreSQL database, part of its accompanying client facing app can be found in **[this repo](https://github.com/cade-kreikemeier/catwalk)**.

## Technologies Used

This application was built using:

- **PostgreSQL**
    - open-source relational database management system emphasizing extensibility and SQL compliance
- **Express**
    - a minimal and flexible Node.js web application framework
- **node-postgres**
    - a node.js module for interfacing with a PostgreSQL database
- **Docker**
    - a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers

---

## Installation

Steps for getting started as a developer on this repo:

1. Clone this repo onto your local machine:
    - ```git clone https://github.com/cade-kreikemeier/sdc_products_api.git```
2. ```cd``` into the repo's root directory
3. Install the project's depencies:
    - ```npm install```
4. Start coding!

***PostgreSQL being installed is required for the database side of this repo.**

---

## Provided Scripts

- ```npm run build```
    - builds the server files for production. - __does not watch for files changes__.
- ```npm run start```
    - starts a development server using nodemon. - __watches for changes and restarts the server with updated content on each file change__.
- ```npm run start:prod```
    - starts a development server using node.
- ```npm run test```
    - runs the app's full test suite via **Jest**, automatically running all files with a `.test.jsx` or `.test.js` file extension.
- ```npm run lint```
    - runs **eslint** on the full repo to check for syntax errors of code-style violations. This repo ueses the **AirBnB Style Guide**
    - _**NOTE:**_ This repo's GitHub origin will not merge any updates that do not the linter.
- ```npm run lint-fix```
    - runs **eslint** like the script above, however eslint will attempt to automatically fix any errors it encounters.
    - _**NOTE:**_ This repo's GitHub origin will not merge any updates that do not the linter.
- ```npm run reset-db```
    - drops the current database and creates a new database called ```products```.
- ```npm run reseed-db```
    - runs a SQL file that populates the ```products``` database with the appropriate tables and data.
---
