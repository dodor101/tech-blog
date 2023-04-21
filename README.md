# Tech blog website

# FYI
* This website is still in the work.

## Table of Contents

---

- [Installation](#installation)
- [Packages](#packages)
- [Description](#description)
- [Usage](#usage)

<br>

## License

---




Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. <br>

<br>

## Installation

---

To install this project:

1. Start by forking this repository on Github.
2. Clone this project to your machine by using the "git clone + URL" command.
3. Open the project with your favorite text editor, like VS Code (in your terminal, first type "cd foldername" then "code .").
4. Install Node.js from their website, if you have not already. Here are some additional [instructions](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs).
5. Install MySQL from their website, if you have not already. Here are some additional [instructions](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide).
6. Suggest installing [Nodemon](https://www.npmjs.com/package/nodemon) if you have not already.
7. Suggest installing [Insomnia](https://insomnia.rest/download) if you have not already.
8. This project includes a package.json file that specifies dependencies for this project, so be sure to run "npm install". This will install the packages specified in the next section.

<br>

## Packages

---

General Technologies:

- Javascript
- Node.js
- Git
- Heroku
- Insomnia

NPM Packages

- nodemon
- express
- dotenv
- mysql2
- sequelize
- bcrypt
- connect-session-sequelize
- express-handlebars
- express-session

<br>

## Description

---

This project is a blog site for developers! The motivation for this project was to create a blog where tech fans can share their thoughts, opinions, articles and blog posts. Upon coming to the site, the homepage presents with existing blog posts and a navbar to help direct you around the site. If you try to navigate away from the homepage, you will be until to until you login and thus will be redirected to the login page. You will notice there is also an option to signup from the login page. If you signup for an account, you will be automatically logged in. Regardless of if you signup or log in, you will be redirected to your dashboard, which is your landing platform for your own posts. If you click on a post in your dashboard, you have the option to update or delete the post. If you click on a post that isn't yours from the homepage, you will be able to view comments and leave one too! Utilzing mySql, Sequelize, and sessions, your login info is stored for 30 minutes while you roam around the site. <br><br> To view this project deployed, click [here](). <br><br>

## Usage

---

After following the instructions in installation:

1. Open the database file in your terminal.
2. Run command "mysql -uroot -p" and enter your password (note: keystrokes will not show).
3. Run command "SOURCE schema.sql" to set up the database and tables.
4. Optionally, run command "npm run resetdb" to replace steps 2 and 3 (enter password when prompted).
5. OK to 'quit' MySql.
6. Create a file called ".env" in the root folder of the program. In this folder include the following information: <br> DB_NAME='' <br> DB_USER='' <br> DB_PW='' <br> DB_SESSION_SECRET=''<br>
7. Open the "server.js" file in your integrated terminal.
8. Run command "npm run seed" (or "node seeds/index.js") to seed the database if desired.
9. Run command "npm run start" (or "node server.js"). Alternatively, if you have Nodemon installed, run "npm run watch" (or "nodemon server.js").
10. Open 'localhost:3001' in your browser and see the site in action.
11. Enter login/logout/signup requests as you please, create a new blog post or update/delete an existing one, or add comments to blog posts.
12. When finished, run CONTROL-C in terminal to end stop nodemon, and trash the session. <br>
