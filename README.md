# FlightScanner

A simple SkyScanner clone built with React and Redux.

<img src="https://i.ibb.co/1qN6nq0/flightscanner-ss.png" width="500" title="hover text">

### Front-end
(flightscanner.netlify.app)[https://flightscanner.netlify.app/]
* Custom React Webpack setup
* Material UI components
* Custom Hooks
* State management trough Redux
* Async calls with redux-thunk
* Persisting with redux-persist
* Deployed on Netlify

### Back-end
(flightscanner-api.sanderdev.nl)[https://flightscanner-api.sanderdev.nl]
* Node with express
* Google login with OAuth2 Passport
* SkyScanner API
* Deployed on DigitalOcean Ubuntu server
* Nginx reverse proxy for sub-domain

After typing e.g. 'Amsterdam' the application will show a list with all airports in AMS to choose from.

When pressing search, the application will fetch flights and prices from the given input.
