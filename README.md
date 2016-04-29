# final-project
Air quality application designed with React

## Screenshots
![Main Search Page](https://www.dropbox.com/s/12bkaeeupc87sjl/Screenshot%202016-04-28%2010.04.02.png?raw=1)
![Results Page](https://www.dropbox.com/s/k0hdvuqf6ds0yfb/Screenshot%202016-04-28%2010.06.44.png?raw=1)

## Technology used
+ React for front-end
+ Sinatra for handling API requests
+ Breezometer for API
+ Webpack with babel
+ Bootstrap for design

## User Stories
**Home Page**
+ A user should be able to search for their air quality based on their location (bronze)

**Display Page**
+ A user should be able to see their air quality that is accurate to their location (bronze)
+ Their air quality should be displayed in an easy to understand and relate to graphic (silver)
+ A user should be able to read about their air quality (silver)
+ A user should be able to use the back button to make a new search (silver)
- A user should be able to see a historical display of their air quality (gold)

## Unsolved problems
- Proper error handling so user is not stuck on the loading screen forever when the api cannot return the data
- Make a second API call in a React way to display historical date range data
- Figure out how to create a date range in ISO format

## Goals
**Bronze**
+ Display a search bar
+ Search Breezometer api based on location
+ Display current air quality conditions

**Silver**
+ Display relevant info about air quality
+ Add styling
+ Add a back button

**Gold**
- Display historical air quality
- Add a time out page/redirect
