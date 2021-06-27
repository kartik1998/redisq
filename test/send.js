const RedisQ = require('../build/index');

const redisq = new RedisQ();
redisq.sendToQueue('world', 'my queue message', (data) => {
  console.log({ data });
});
console.log(1);
