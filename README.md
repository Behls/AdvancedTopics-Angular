# Assignment 2 - Advanced Topics - Angular
This is an submission for the Advanced Topics Angular Module at Perth UHI. The goal was to implement various concepts learned throughout the module, including authentication, user login and subcriptions, fetching and manipulating data from various endpoints using RJX, as well as storing and retreiving data from a realtime database. 

## Setup
All packages used in this project are stored in the `package.json` file, to install them use the following command:

```
npm install

``` 

## Resources - References for external resources (Accrediting Authors)

- [Movie Logo]('https://www.flaticon.com/free-icon/clapperboard_2184561?term=movie&page=1&position=23&origin=search&related_id=2184561')

## Data Storage 
All data is stored and fetched using Firebase. Users are able to sign up with their `email` and `password`. Data is stored and fetched in realtime, no need for refreshing of any webpages.

## Movie DB API
An external API tool was used to retrieve current and historical movie data, which is then displayed on various pages throughout the application. Linked below is documentation, which encludes all the endpoints, additional help for specific languages including getting started with the API, as well as a live tool for API call examples. 
- [MovieDB API Docs]('https://developer.themoviedb.org/reference/intro/getting-started')
 

# Angular CLI Generated Information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
