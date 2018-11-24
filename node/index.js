const app = require('express')()
app.get('*', (req, res) => {
  res.send('Hello from Express.js!');
})

console.log(process.env.NODE_PORT);
app.listen();

module.exports = app;