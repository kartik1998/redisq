const RedisQ = require('../build/index');

const redisq = new RedisQ();
redisq.consume('world', (channel, message) => {
  console.log({ channel, message });
});
