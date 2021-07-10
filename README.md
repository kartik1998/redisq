<p align = "center"> <img src = "https://raw.githubusercontent.com/kartik1998/redisq/master/assets/logo.jpg" alt="REDISQ" width=300 height=80> </p>

<blockquote> Redisq is a redis backed queue, message broker for node js</blockquote>

## Usage

- <i>Installation</i> : `npm i https://github.com/kartik1998/redisq.git#v0.0.0`

To send a message: (send.js)

```javascript
const RedisQ = require('redisq');

const redisq = new RedisQ();
redisq.sendToQueue('world', 'my first message', (err, data) => {
  console.log(data);
  process.exit();
});

```
Sample output : `OK`

To recieve message: (recieve.js)

```javascript
const RedisQ = require('redisq');

const redisq = new RedisQ();
redisq.consume('world', (channel, message) => {
  console.log('queueName ->', channel);
  console.log('message ->', message);
});

```
Sample output:

```
queueName -> world
message -> my first message
```

<blockquote> Please note that the messages that aren't consumed are persisted in redis and are consumed later on by a queue consumer.</blockquote>

<blockquote> Redisq by default connects to 127.0.0.1:6379. <br> You can use your own specific options by using something like const redisq = new RedisQ({options}). refer: https://www.npmjs.com/package/redis </blockquote>

