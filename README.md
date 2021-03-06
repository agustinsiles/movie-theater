# Movie Theater app

This app shows a list of suggested movies returned by the movie database API. If you type something to search for and hit Enter or the Search button, a list of movies matching your query will show.

To see more details for a movie, simply click one and you will be redirected to that movie's detail page.

## Run the app
The app is deployed so anyone can access it without having to clone the repo and install it locally. You can run the app in [https://movie-theater-55596.web.app/](https://movie-theater-55596.web.app/)

## Local setup
Run the following commands:
1) `git clone https://github.com/agustinsiles/movie-theater.git`
2) `cd movie-theater`
3) `npm i`
4) `npm start`
And that's it! A new tab in your browser should automatically be opened with the app. But in case it doesn't, simple go to [http://localhost:3000](http://localhost:3000) 

## Technical details
The app has been created using `create-react-app` with React's latest version as of 05/09/2021. It uses only functional components with hooks and Redux to manage state. 