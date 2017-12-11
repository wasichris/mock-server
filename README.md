# Mocked Web API #

This is a web API (Express, node.js) used to provide data to my  demo websites. It uses [nodemon](https://github.com/remy/nodemon) to monitor any changes in api folder (settings in nodemon.json) and automatically restart the server.

<br>

# Get Started #


``` bash
# install dependencies
npm install

# serve web api at localhost:9527/api
npm start
```

<br>

# Hello World #

After "npm start" and you can use the following URL to check if web API works properly.

http://localhost:9527/api/CR000102

<br>

Normally you will get the JSON data as below, that means it works correctly.

``` json
{  
   "account":"WASICHRIS",
   "email":"chris@big.com",
   "address":"103 Prince Street",
   "city":"New York",
   "state":"NY",
   "zip":1001,
   "hasJob":true,
   "weekdays":[  
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday"
   ],
   "skills":[  
      "react",
      "vue"
   ],
   "sex":"male",
   "isEmployee":true
}
```