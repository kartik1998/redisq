import RedisQ from './redisq/redisq';

const queue = new RedisQ();

queue.set('kartik', '20');
queue.get('kartik', (err, reply) => {
  console.log(err, reply);
});
