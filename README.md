# Food Log App

This app allows users to keep track of what they eat, when they eat it, and how many calories they ate.

Users can enter text to describe the foods eaten, a number for the total calories consumed, and additional text for details of the meal. Each entry is saved with the date and time that the entry was made. Meals are displayed in the order they were recorded, and meals recorded on the same day of the week will be displayed with the same background color. Drop-down options allow users to filter meals by a max number of calories. Meals with more than 2000 calories will have their calories displayed in bold red text.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* Navigate to the repository directory.
* `npm install`
* `bower install`
* `gulp build`
* `gulp serve`
* Visit [http://localhost:3000](http://localhost:3000) in a web browser.

##Known Bugs

Minutes less than 10 display as only one digit in time stamp.

## Possible future version features

Persistent database to save log.

Group meals by day.

Additional filters: meal time of day, weekday/weekend.

Sort options.

## Technologies Used

* Javascript
* Angular JS
* Node.js
* Bower
* html/css
* jQuery
* Bootstrap

## License

This project is licensed under the MIT license.

Copyright (c) 2017 **Brad Copenhaver**
