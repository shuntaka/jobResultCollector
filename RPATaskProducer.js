     import amqp from 'amqplib';
    //  import express from 'express';
    //  import uuid from 'uuid/v1';
    //  import bodyParser from 'body-parser';

    //  const app = express();
    //  app.use(bodyParser.json()); // support json encoded bodies
    //  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
    //  app.post('RPA/createJob', (req, res) => {
    //      req.body
    //  });


     let connection;
     let channel;

     amqp
       .connect('amqp://localhost')
       .then((conn) => {
         connection = conn;
         return conn.createChannel();
       })
       .then((ch) => {
         channel = ch;
         channel.sendToQueue('jobs_queue', new Buffer('something to do'));
       })
       .catch(console.warn);
