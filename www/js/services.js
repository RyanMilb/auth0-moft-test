angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var predictions = [{
    id: 0,
    name: 'Will Hillary win the democratic nomination in 2016?',
    details:'Will Hillary win the democratic nomination in 2016? Will Hillary win the democratic nomination in 2016? Will Hillary win the democratic nomination in 2016?',
    img: 'https://gastatic.com/blog/wp-content/uploads/2015/10/ClintonGunControl.jpg'
  }, {
    id: 1,
    name: 'Will the federal reserve raise interest rates in Q1 2016?',
    details:'Will the federal reserve raise interest rates in Q1 2016? Will the federal reserve raise interest rates in Q1 2016? Will the federal reserve raise interest rates in Q1 2016?',
    img: 'http://www.thelibertybeacon.com/wp-content/uploads/2013/07/The-US-Federal-Reserve-II-A1.jpg'
  }, {
    id: 2,
    name: 'Will the price of bitcoin hit over $5,000 USD in 2016?',
    details:'Will the price of bitcoin hit over $5,000 USD in 2016? Will the price of bitcoin hit over $5,000 USD in 2016? Will the price of bitcoin hit over $5,000 USD in 2016?',
    img: 'http://dealbreaker.com/uploads/2013/10/bitcoins.jpg'
  }, {
    id: 3,
    name: 'Will there be a magnitude 8.0 or higher earthquake in California by the end of 2015?',
    details:'Will there be a magnitude 8.0 or higher earthquake in California by the end of 2015? Will there be a magnitude 8.0 or higher earthquake in California by the end of 2015? Will there be a magnitude 8.0 or higher earthquake in California by the end of 2015?',
    img: 'https://tribkcpq.files.wordpress.com/2015/10/s055588098-300.jpg'
  }];

  return {
    all: function() {
      return predictions;
    },
    remove: function(chat) {
      predictions.splice(predictions.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < predictions.length; i++) {
        if (predictions[i].id === parseInt(chatId)) {
          return predictions[i];
        }
      }
      return null;
    }
  };
})


.service('PredictionFeedService', function () {
  this.sayHello = function () {
    console.log('hello');
  };
});;
