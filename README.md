# Pandemic Product Finder (PPF)
*Made during the 24 hour, Queen's University hackHer Hackathon*

![PPF Logo](https://i.imgur.com/ItjQPx7.png)

## Introduction
Early in the COVID-19 pandemic, there were shortages of PPE, toilet paper, and other essential household items. As lockdowns and other pandemic measures are implemented, these shortages could be on a rolling basis.

With ***Pandemic Product Finder (PPF)*** we aim to be the central health-hub where users can post real-time information on whether essential supplies are in stock at certain stores.

## Features
### Map
The main feature of PPF is the map! The map we have implemented uses the [Mapbox API](https://www.mapbox.com/). Mapbox provides accurate maps, navigation, and marking. Mapbox also allows us the freedom to further implement navigation and searching features.

![Map on webpage](https://i.imgur.com/4bXN4IK.png)

Pins can be added to the map, and specify whether hand sanitizer, masks, gloves, or toilet paper are in stock or out of stock. Pins are categorized as "Masks", "Gloves", "Hand Sanitizer" and "Toilet Paper". Pins are displayed for that category after pressing the corresponding button.

![Buttons to toggle pins](https://i.imgur.com/byLrmLB.png)

### User Driven
Each visitor to PPF can add a pin anywhere. When you go out into your community you are able to mark locations to update others on the status of in-need supplies. 

A pin can be added by selecting the relevant product. For example, if you wanted to report that toilet paper was in stock at Food Basics, you would press the "Toilet Paper" button, type in the name of the store, press the "Add" button and then double-click on the location of the store in question. 

![adding a pin](https://i.imgur.com/DII8Y2l.png)

Whether the pin is specified to have an item in or out of stock, the location will be marked with a green or red pin to represent in/out of stock items respectively. After clicking on a pin, it will also display a popup describing what store/location was pinned.

![pin popup](https://i.imgur.com/z1v5f6M.png)

### Backend
[Firebase](https://firebase.google.com/) is an app development platform by Google that allows for quick and easy implementation of databases, authentication, and cloud functions. Firebase allowed us to have a realtime database that can store pinned locations by users and which allows for pinned locations to be seen globally. Our database is configured to store the latitude, longitude, in/out of stock status, and the name of the pinned location.

## Challenges
Originally PPF was going to be an Android app, but we had no idea where to start. We decided that it would be best if we developed a web application, as some team members had slight experience in web development. Nonetheless, there were struggles in implementing the Mapbox API, integration of Firebase, and the understanding of JavaScript.

As the project progressed we all became more familiar with Firebase and JavaScript, and eventually were able to create a functioning application. Despite our knowledge gaps we were all able to learn valuable skills during the production of PPF.  

## What's next for PPF?
The limited time that we had to work on this project meant not all features could be developed fully, and that there are more avenues where this project can be developed.

Some features we would like to add or refine are:
* Hosted on a live server
* Authentication and user IDs
* Change of practices to reduce the possibility of exploitation
* Robust testing of database practices
* Data analysis to predict when stores may be in/out of stock of items
* Mobile app versions

## Authors
* Alex Baldassare
* Josh Graham
* Nicholas Falconi
* Ryan Anderson