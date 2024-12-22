
# **Movie Search Application 🔎**

## ** 📌Overview 🏌️‍♀️**

This project is a React-based movie search application that uses the OMDB API to fetch movie data. The application allows users to search for movies, view detailed information about each movie, and filter the search results based on movie type.



## **Key Features 🔎**

- **Product Listing Page**

    **Movie Search** : Users can enter movie titles or keywords into a search bar to find movies.

  **Search Results** : Displays search results in a list format, showing movie posters, title.

  **Pagination**: Handles large sets of search results, displaying pagination controls for easy navigation through pages.

  **Movie Details** : Clicking on a movie title takes the user to a detailed view, showing:

      - Large poster image,Title, release year, genre, Plot summary, Ratings and cast


  **Filtering**: Users can filter movies based on their type ( all,episode,webseries,W\Episodes) using a dropdown filter.

  **React Router**: Implements navigation between the search page and movie details page.

  **Error Handling**: Displays user-friendly messages when no results are found or when an API error occurs.

  **Responsive Design**: Ensured the application is mobile-friendly and works well on different screen sizes.


- **👈Routing👉**
  - Proper routing between the 📤Movie Page  and the Movie detail Page📥 is implemented using React Router.


This task description explains the project objectives, key features, and tools used, making it ideal for the README file. Let me know if you need help writing the complete README! 😊







## Tech Stack 🧑‍💻
##### Html ![html](https://github.com/user-attachments/assets/5bc41959-c867-49f1-b793-f8fc338af570)
##### Tailwindcss /css ![icons8-tailwindcss-48](https://github.com/user-attachments/assets/035dce74-609c-424d-b12a-dde8a68ec0b6)

##### Javascript ![icons8-js](https://github.com/user-attachments/assets/10c8976d-b45f-41d5-8a97-a62a0b0c5fd2)
##### React  ![icons8-react](https://github.com/user-attachments/assets/3f6bdb40-b7a6-4476-9caf-ffb9cf48287f)
##### React-router


## Screenshots

#### landing page web view with filter

![web view filter 4](https://github.com/user-attachments/assets/b5d9cd1f-b3ba-48ad-a02d-cca529b6590e)


#### pic 2 Favourites page

![webview2](https://github.com/user-attachments/assets/3f01d952-3cf5-4f66-9c76-07b618b93fc6)


#### error handling page

![error handling page 5](https://github.com/user-attachments/assets/23a689b1-5c07-4865-8f7b-ffb9fa50af4a)


#### mobile  responsive view with routing 

![mobileview pagination 2](https://github.com/user-attachments/assets/3e4209da-4f2e-4986-b2a3-79bb9bc6adca)

#### mobile  responsive view  favourites page
![mobile view fav3](https://github.com/user-attachments/assets/6043b7e7-c963-4b0d-9d5d-57820f3b6fab)

#### mobile  responsive view for movie detail page

![mobile view  details page4](https://github.com/user-attachments/assets/53fd32a7-52ef-4b13-a803-93fb9cdf2dea)







## Demo-Clip

#### web view  demo
https://github.com/user-attachments/assets/42826bd6-432f-497d-bd04-862e8e205a8e


#### Mobile Responsive view demo

https://github.com/user-attachments/assets/96dc94b4-a2db-4dfe-81a4-8b95623ccab9





# Installation

- Install my-project with npm

## project-configurations

#### React project creation

```bash
 npm create vite@latest

```
#### Tailwind initilation
```bash
npm install -D tailwindcss postcss autoprefixer
```
#### Tailwind config
```bash
npx tailwindcss init -p
```

#### Tailwind index.css
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
#### Tailwind config.js
```bash
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```
#### To run the project
```bash
  npm run dev
```
#### For routing package 
```bash
npm i react-router-dom@v6
```
#### For data extraction package 
```bash
npm i axois
```
## API Reference


#### GET
```http
https://omdbapi.com/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Running Tests

To run tests, run the following command

```bash
  npm run dev
```


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Appendix

Any additional information goes here


## Deployment -Url

https://movie-searching-app-omdbapi.netlify.app/

## Documentation

[Documentation](https://linktodocumentation)


## 🚀 About Me
I'm a full stack Web developer...


## 🔗 Links

https://github.com/sugu2344

## 🛠 Skills
Javascript, HTML, TailwindCSS, React...


## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```



