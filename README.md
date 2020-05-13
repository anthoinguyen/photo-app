1. Setup ReactJS App via Create React App
Link: https://create-react-app.dev/docs/getting-started/

2. Add SCSS support
npm i --save-dev node-sass

3. Add react router
npm i --save react-router-dom

4. Add UI lib
npm i --save reactstrap

Tổ chức folder
src
|__ assets
|  |__ images
|  |__ styles (global styles) 
|
|__ components (shared components)
|
|__ features
  |__ Photo
    |__ components
    |  |__ PhotoList
    |  |__ PhotoCard
    |  |__ PhotoForm
    |
    |__ pages
    |  |__ MainPage
    |  |__ AddEditPage
    |__ photoSlice.js
    |__ index.js