# Athena Club - Carousel

## Description

[Demo](https://ac-challenge.onrender.com/)

This project aims to recreate the carousel(slider) product that can be found on [https://www.athenaclub.com/](https://www.athenaclub.com/) using Ruby on Rails full-stack framework.

## Technologies

* @Hotwired/Stimulus 3.2.1
* Bootstrap 5.2.3
* PostgreSQL 14.5
* Rails 7.0.4
* Ruby 3.1.2
* Stimulus-use 0.52 for responsiveness for the slider
* Tiny-slider 2.9.4

## Installation

Ruby on Rails environment


### Clone repository & getting started

To clone the GitHub repository, run the following command in your terminal:

```
git clone git@github.com:wendy-ph/athenaclub-challenge.git
```

Navigate to the cloned repository in your local machine:
```
cd athenaclub-challenge
```

To install the app's dependencies and create the database, run the following commands:
```
bundle install
yarn install
rails db:create db:migrate db:seed
```
After running the last command, you should see the following output in your terminal:

![Screenshot of terminal](app/assets/images/dbseed.png)

You are now ready to explore the app!
To view it locally, run ```rails s``` in your terminal and open your web browser to http://localhost:3000/.
Alternatively, you can view it live [here](https://ac-challenge.onrender.com/).

## Getting around the app

### Backend

The ```products.json``` file is stored in ```athenaclub-challenge/db```. The products were added to the database via ```db/seeds.rb```.

To access the ```products``` from the front-end, I created
* the route ```get 'index', to: 'products#index``` in file ```config/routes.rb```
* an instance variable ```@products``` in ```app/controllers/products_controller.rb```

### Frontend

#### HTML

The HTML file for the carousel can be found in ```app/views/products/index.html.erb```

#### Javascript

* The Javascript code to initialize ```tiny-slider``` for the carousel can be found in ```app/javascript/controllers/slider_controller.rb```.
* You will also find the function ```star()``` to convert ```product.rating``` into star ratings.
* ```hideBtn()``` is used to hide the slider navigation btn at start and end of slider when not in mobile view.
* ```useMatchMedia()```, ```smallChanged()```, ```isSmall()``` and ```notSmall()``` are functions from ```stimulus-use``` package that are used to make the carousel more responsive in regards to ```loop``` being ```true``` or ```false```.

#### Stylesheet

Styling for bubble element can be found in ```app/assets/stylesheets/components/_bubble.scss```

Styling for the carousel(slider) can be found in ```app/assets/stylesheets/components/_slider.scss```

Custom font can be found in ```app/assets/stylesheets/config/_fonts.scss```

### Bugs

When opening the site on desktop view, and resizing the screen to a smaller view, everything works as it should. However,

* when opening the site from a smaller view (< 768px) and resizing the window to a larger view, the slider ```loop``` setting does not change from ```true``` to ```false``` (if page is refreshed, the correct ```loop: true/false``` will display).

* after the page is refreshed, the left navigation button will flash/flicker (most likely due to the following code in ```app/javascript/controllers/slider_controller.rb```:
```
setInterval(() => {
  this.hideBtn()
}, this.refreshBtnValue);
```
)
