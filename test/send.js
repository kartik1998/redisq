const RedisQ = require('../build/index');

const redisq = new RedisQ();
redisq.sendToQueue('world', 'my queue message', (err, err1, res, data) => {
  console.log({ err, err1, res, data });
});
