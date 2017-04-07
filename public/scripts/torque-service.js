String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var torqueCodeMap = {
  email: 'eml',
  time: 'time',
  longitude: 'kff1005',
  latitude: 'kff1006',
  gpsSpeed: 'kff1001',
  absoluteThrottlePositionB: 'k47',
  acceleratorPedalPositionD: 'k49',
  acceleratorPedalPositionE: 'k4a',
  ambientAirTemp: 'k46',
  distanceTravelledSinceCodesCleared: 'k31',
  engineRpm: 'k0c',
  fuelLevelFromEngineEcu: 'k2f',
  gpsAccuracy: 'kff1239',
  gpsAltitude: 'kff1010',
  gpsBearing: 'kff123b',
  gpsSatellites: 'kff123a',
  gpsObdSpeedDifference: 'kff1237',
  horsepowerAtTheWheels: 'kff1226',
  relativeThrottlePosition: 'k45',
  runTimeSinceEngineStart: 'k1f'
};

var unitMap = {  
   "eml":"Carlos.glvn1993@gmail.com",
   "v":"8",
   "session":"1490399372042",
   "id":"65f30e7cbf52901024604bedbb9e6e1a",
   "time":"1490399372069",
   "defaultUnitff1005":"\u00b0",
   "defaultUnitff1006":"\u00b0",
   "defaultUnitff1001":"km\/h",
   "defaultUnitff1007":"",
   "defaultUnit47":" ",
   "defaultUnit49":" ",
   "defaultUnit4a":" ",
   "defaultUnit46":"\u00b0C",
   "defaultUnit31":"km",
   "defaultUnit05":"\u00b0C",
   "defaultUnit04":" ",
   "defaultUnit0c":"rpm",
   "defaultUnit2f":"%",
   "defaultUnitff1239":"m",
   "defaultUnitff1010":"m",
   "defaultUnitff123b":"\u00b0",
   "defaultUnitff123a":"",
   "defaultUnitff1237":"km\/h",
   "defaultUnitff1226":"hp",
   "defaultUnit0f":"\u00b0C",
   "defaultUnit45":" ",
   "defaultUnit1f":"s",
   "defaultUnit0d":"km\/h"
};

var nameMap = {  
   "eml":"Carlos.glvn1993@gmail.com",
   "v":"8",
   "session":"1490399372042",
   "id":"65f30e7cbf52901024604bedbb9e6e1a",
   "time":"1490399372070",
   "userUnitff1005":"\u00b0",
   "userUnitff1006":"\u00b0",
   "userUnitff1001":"mph",
   "userUnitff1007":"",
   "userUnit47":" ",
   "userShortName47":"A THR2",
   "userFullName47":"Absolute Throttle Position B",
   "userUnit49":" ",
   "userShortName49":"PedalD",
   "userFullName49":"Accelerator PedalPosition D",
   "userUnit4a":" ",
   "userShortName4a":"PedalE",
   "userFullName4a":"Accelerator PedalPosition E",
   "userUnit46":"\u00b0F",
   "userShortName46":"Air temp",
   "userFullName46":"Ambient air temp",
   "userUnit31":"miles",
   "userShortName31":"MIL Off",
   "userFullName31":"Distance travelled since codes cleared",
   "userUnit05":"\u00b0F",
   "userShortName05":"Coolant",
   "userFullName05":"Engine Coolant Temperature",
   "userUnit04":" ",
   "userShortName04":"Load",
   "userFullName04":"Engine Load",
   "userUnit0c":"rpm",
   "userShortName0c":"Revs",
   "userFullName0c":"Engine RPM",
   "userUnit2f":" ",
   "userShortName2f":"Fuel",
   "userFullName2f":"Fuel Level (From Engine ECU)",
   "userUnitff1239":"ft",
   "userShortNameff1239":"GPS Acc",
   "userFullNameff1239":"GPS Accuracy",
   "userUnitff1010":"ft",
   "userShortNameff1010":"GPS Height",
   "userFullNameff1010":"GPS Altitude",
   "userUnitff123b":"\u00b0",
   "userShortNameff123b":"GPS Brng",
   "userFullNameff123b":"GPS Bearing",
   "userShortNameff1006":"GPSLat",
   "userFullNameff1006":"GPS Latitude",
   "userShortNameff1005":"GPSLon",
   "userFullNameff1005":"GPS Longitude",
   "userUnitff123a":"",
   "userShortNameff123a":"GPS Sat",
   "userFullNameff123a":"GPS Satellites",
   "userUnitff1237":"mph",
   "userShortNameff1237":"Spd Diff",
   "userFullNameff1237":"GPS vs OBD Speed difference",
   "userUnitff1226":"hp",
   "userShortNameff1226":"HP",
   "userFullNameff1226":"Horsepower (At the wheels)",
   "userUnit0f":"\u00b0F",
   "userShortName0f":"Intake",
   "userFullName0f":"Intake Air Temperature",
   "userUnit45":" ",
   "userShortName45":"R THR",
   "userFullName45":"Relative Throttle Position",
   "userUnit1f":"s",
   "userShortName1f":"RunTime",
   "userFullName1f":"Run time since engine start",
   "userShortNameff1001":"GPS Spd",
   "userFullNameff1001":"Speed (GPS)",
   "userUnit0d":"mph",
   "userShortName0d":"Speed",
   "userFullName0d":"Speed (OBD)"
};

var fakeData = {  
   "eml":"Carlos.glvn1993@gmail.com",
   "v":"8",
   "session":"1490724865372",
   "id":"65f30e7cbf52901024604bedbb9e6e1a",
   "time":"1490725152702",
   "kff1005":"-97.65900399",
   "kff1006":"30.40092695",
   "kff1001":"6.9119997",
   "kff1007":"26.6",
   "k47":"15.686275",
   "k49":"15.686275",
   "k4a":"7.8431373",
   "k46":"32.0",
   "k31":"15586.0",
   "k5":"83.0",
   "k4":"36.47059",
   "kc":"702.25",
   "k2f":"48.627453",
   "kff1239":"3.0",
   "kff1010":"200.0",
   "kff123b":"26.6",
   "kff123a":"19.0",
   "kff1237":"0.0",
   "kff1226":"0.46416715",
   "kf":"37.0",
   "k45":"5.882353",
   "k1f":"347.0",
   "kd":"0.0"
};

function TorqueService() {
  var service = this;

  var data = {};
  Object.keys(service._codeMap).forEach(function (code) {
    // console.log(service._codeMap[code]);
    if (service._data.getValue()[service._codeMap[code]]) {
      data[code] = service._data.getValue()[service._codeMap[code]];
      TorqueService.prototype['get' + code.capitalizeFirstLetter()] = function () {
        return service._data.getValue()[service._codeMap[code]];
      };
    }

    if (service._nameMap.getValue()['userShortName' + service._codeMap[code].substr(1)]) {
      data[code + 'ShortName'] = service._nameMap.getValue()['userShortName' + service._codeMap[code].substr(1)];
      TorqueService.prototype['get' + code.capitalizeFirstLetter() + 'ShortName'] = function () {
        return service._nameMap.getValue()['userShortName' + service._codeMap[code].substr(1)];
      };
    }

    if (service._nameMap.getValue()['userFullName' + service._codeMap[code].substr(1)]) {
      data[code + 'FullName'] = service._nameMap.getValue()['userFullName' + service._codeMap[code].substr(1)];
      TorqueService.prototype['get' + code.capitalizeFirstLetter() + 'FullName'] = function () {
        return service._nameMap.getValue()['userFullName' + service._codeMap[code].substr(1)];
      };
    }

    if (service._unitMap.getValue()['defaultUnit' + service._codeMap[code].substr(1)]) {
      data[code + 'Unit'] = service._unitMap.getValue()['defaultUnit' + service._codeMap[code].substr(1)];
      TorqueService.prototype['get' + code.capitalizeFirstLetter() + 'Unit'] = function () {
        return service._unitMap.getValue()['defaultUnit' + service._codeMap[code].substr(1)];
      };
    }
  });

  service.data = new Rx.BehaviorSubject(data);

  // service._mqttClient = new PahoMQTT.Client('broker.hivemq.com', 8000, 'clientId-yzUBL20ktx');
  // service._mqttClient = new PahoMQTT.Client('test.mosquitto.org', 8080, 'ABC');
  // service._mqttClient.onMessagedArrived = function (message) {
  //   console.log(message);
  //   service._mqttClient.disconnect();
  // }

  // service._mqttClient.connect({
  //   onSuccess: function () {
  //     console.log('Connected!');
  //     // service._mqttClient.subscribe('92361f002671/mazda01');
  //     service._mqttClient.subscribe('presence');
  //     var testMessage = new PahoMQTT.Message('Hello world');
  //     testMessage.destination('presence');
  //     service._mqttClient.send(testMessage);
  //     // service._mqttClient.publish('presence', 'ABCDEF');
  //   }
  // });
  service._mqttClient = mqtt.connect('ws://test.mosquitto.org:8080');
  // console.log(ser)
  service._mqttClient.on('connect', function () {
    console.log('connected');
    service._mqttClient.subscribe('presence');
    // service._mqttClient.publish('presence', '{"eml":"Carlos.glvn1993@gmail.com","v":"8","session":"1490500802329","id":"65f30e7cbf52901024604bedbb9e6e1a","time":"1490501243775","kff1005":"-97.49772242","kff1006":"25.85416899","kff1001":"60.912","kff1007":"242.8","k47":"14.509804","k49":"15.686275","k4a":"7.8431373","k46":"33.0","k31":"14792.0","k5":"88.0","k4":"36.07843","kc":"1275.75","k2f":"71.37255","kff1239":"3.0","kff1010":"-8.0","kff123b":"242.8","kff123a":"10.0","kff1237":"0.020000458","kf":"39.0","k45":"4.7058825","k1f":"1479.0","kd":"61.0"}');
    service._mqttClient.publish('presence', 'abc');
  });

  service._mqttClient.on('message', function (topic, message) {
    console.log(message.toString());
    service.updateData(JSON.parse(message.toString()));
    service._mqttClient.end();
  });

}

TorqueService.prototype._codeMap = torqueCodeMap;
TorqueService.prototype._data = new Rx.BehaviorSubject(fakeData);
TorqueService.prototype._mqttClient = null;
TorqueService.prototype._nameMap = new Rx.BehaviorSubject(nameMap);
TorqueService.prototype._unitMap = new Rx.BehaviorSubject(unitMap);

TorqueService.prototype.data = null;
TorqueService.prototype.updateData = function (data) {
  var service = this;
  service._data.next(data);

  var data = {};
  Object.keys(service._codeMap).forEach(function (code) {
    if (service._data.getValue()[service._codeMap[code]]) {
      data[code] = service._data.getValue()[service._codeMap[code]];
    }
  });
  service.data.next(data);
}
