var client = mqtt.connect('mqtt://broker.hivemq.com:8000');
 
client.on('connect', function () {
  client.subscribe('92361f002671/mazda01', {
    qos: 2  
  });
  client.publish('presence', 'Hello car');
});

client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString())
  client.end()
});
