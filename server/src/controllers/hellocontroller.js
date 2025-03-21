// server/src/controllers/helloController.js
const { getHelloMessage } = require('../services/HelloService');


const hello = (req, res) => {
  const message = getHelloMessage();
  res.json({ message });
};

module.exports = { hello };
