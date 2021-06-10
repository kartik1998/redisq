import redis from 'redis';

const client = redis.createClient({ host: 'localhost', port: '6379' });

client.on('error', function (error) {
  console.error(error);
});

client.set('key', 'value', redis.print);
client.get('key', redis.print);
