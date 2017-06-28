import amqp from 'amqplib';
amqp
  .connect('amqp://localhost')
  .then((conn) => {
    connection = conn;
    return conn.createChannel();
  })
  .then((ch) => {
    channel = ch;
    return channel.assertQueue('jobs_results_queue');
  })
  .then((q) => {
    queue = q.queue;

  })
  .catch(console.warn);
