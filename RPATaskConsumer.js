import amqp from 'amqplib';

let connection;
let channel;
let queue;

function consume() {
  channel.consume(queue, (msg) => {
    if (msg !== null) {
      console.log(msg.content.toString());
      channel.ack(msg);
    }
  });
}

amqp
  .connect('amqp://localhost')
  .then((conn) => {
    connection = conn;
    return conn.createChannel();
  })
  .then((ch) => {
    channel = ch;
    return channel.assertQueue('jobs_queue');
  })
  .then((q) => {
    queue = q.queue;
    consume();
  })
  .catch(console.warn);
