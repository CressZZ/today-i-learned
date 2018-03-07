## Before running your app, you can do this in console,

`export NODE_ENV=production`
Or if you are in windows you could try this:

`SET NODE_ENV=production`
or you can run your app like this:

`NODE_ENV=production node app.js`
You can also set it in your js file:

`process.env.NODE_ENV = 'production';`
But I don't suggest to do it in your runtime file, since it's not easy to open up VIM in your server and change it to production. You can make a config.json file in your directory and everytime your app runs, it reads from it and sets the configuration.
