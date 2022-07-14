# CloneService backend prototype

## Made
1. modules needed for mobile app;
2. the ability to save images;
3. DB connection;


## Needs to improved
1. add guards for authentication/authorization
2. add paginator
3. add more product types

## Run

1. install node.js
```bash
brew install node; for macos or sudo apt install nodejs for ubuntu 20
```
2. clone the repository
```bash
git@github.com:UtopicUnicorn/Diploma-backend-prototype.git
```
3. go to the project directory
4. install dependencies
```bash
npm install 
```
5. create PostgreSQL database and change mikroorm-config.ts
6. create migration
```bash
npx mikro-orm migration:create -i
```
7. run migration
```bash
npx mikro-orm migration:up
```
8. run project
```bash
nest start
```
