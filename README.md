# Signup Tutorial

React
Rails
Email

## Description

_This app is a prototype app for a client who needed a sign up form for vendors at a health fair._
<br/>

_They wanted email notifications when a vendor signs up. One notification to the vendor, and a notificationß for the client._

 <br />

_I also setup a "backend" for them, so they can View / delete the vendors._

## Steps

<br />
rails db:create
<br />
rails db:migrate
<br />
<br />
Rails g scaffold Vendor name company phone address email service description liabilityRequire prize snackBring snacks
<br />
<br />
Change API config
<br />
SEARCH //ADD for changes needed
<br />
<br />
heroku create --remote heroku-18 --stack heroku-18 <your app name>-heroku-18
<br />
OR 
<br />
heroku stack:set heroku-18 -a <app name>
<br />
git commit -m "message here"
<br />
git push heroku master
<br />
heroku run rails db:migrate
