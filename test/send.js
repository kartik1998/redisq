const RedisQ = require('../build/index');

const redisq = new RedisQ();
redisq.sendToQueue('world', process.argv[2], (err, data) => {
  console.log({ err, data });
  process.exit();
});
