This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## deploy react app to github pages
[Host react app on github pages for free](https://medium.com/better-programming/how-to-host-your-react-app-on-github-pages-for-free-919ad201a4cb#:~:text=When%20you've%20successfully%20deployed,is%20hosted%20on%20GitHub%20Pages.)

### 0. set up environment
- install npm
- config vs
```
install Simple Ract Snippets
install Prettier - Code formatter
enable editor.formatOnSave
theme Ayu Mirage
```
`shortcut`
```
imrc - import react component from react
cc   - class component template
sfc  - stateless functional component template
```

### 1. set up repository

### 2. set up react app
```
$ npx create-react-app react-deploy
$ cd react-deploy
```

```
$ git init
$ git add .
$ git commit -m "add: initialCommit"
$ git remote add origin https://github.com/{username}/React-Deploy.git
$ git push origin master
```

### 3. deploy react app
`step 1: install gh-pages`
```
npm install gh-pages --save-dev
```
`step 2: open the package.json in your React application and add the homepage property.`
```
“homepage”: “http://sabesansathananthan.github.io/React-Deploy"
```
`step 3: addd predeploy,deploy property in package.json`
```
"scripts": { 
 "start": "react-scripts start",
 "predeploy": "npm run build",
 "deploy": "gh-pages -d build",
 "build": "react-scripts build",
 "test": "react-scripts test",
 eject": "react-scripts eject"
},
```
`step 4: run deploy command`
```
npm run deploy
```


### 4. dependencies
- gh-pages : npm i gh-pages
- router   : npm i react-router-dom

### 5. commands
- npm start : run the website