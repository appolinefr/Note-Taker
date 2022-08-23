# Note-Taker

## Table of content

- [Description of Project](#description-of-project)
- [Project Requirements](#project-requirements)
- [What I have learned](#what-i-have-learned)
- [Challenges](#challenges)
- [Screenshot of the application](#screenshot-of-the-command-line-application)
- [Link to deployed Heroku page](#link-to-deployed-heroky-page)

## Description of Project

This challenge was to create an application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file.
The application had to be deployed to Heroku.

## Project Requirements

Here are the main requirements of the project:

- When I open the Note Taker then I am presented with a landing page with a link to a notes page
- When I click on the link to the notes page then I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- When I enter a new note title and the note’s text then a Save icon appears in the navigation at the top of the page
- When I click on the Save icon then the new note I have entered is saved and appears in the left-hand column with the other existing notes
- When I click on the Write icon in the navigation at the top of the page then I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## What I have learned

Working on this challenge allowed me to consolidate my express knowledge. I know have a better understand of routes, router and middleware. This challenge was also the opportunity to deploy my first app with Heroku. The process was very smooth and I achieved a successfull deployement on my first try.
It has been great learning a new way of deploying after using github pages for the last few weeks.

## Challenges

Defining the routes was more challenging than I initially thought. I was not being spedific enough with my routes so my code was throwing errors.
The way I resolved this was by being really specific with my routes. I organised myr outes as "homeRoutes" and "apiRoutes" that would be dedicated to any routes that respond with data (json data). 

### Screenshot of the deployed page

![Screenshot of deployed page](/image/deployed-image.png)

### Link to deployed Heroku page

[Link to deployed Heroku page](https://dry-wildwood-71539.herokuapp.com/)
