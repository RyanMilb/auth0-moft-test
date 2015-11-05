angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var predictions = [ {
    id: 0,
    name: 'Will the federal reserve raise interest rates in Q1 2016?',
    details:'Will the federal reserve raise interest rates in Q1 2016? Will the federal reserve raise interest rates in Q1 2016? Will the federal reserve raise interest rates in Q1 2016?',
    img:'https://lh3.googleusercontent.com/QAt3J0Jx4ScsLjS4_zG3baO-kn14Sjb4HAq_nusrEhYX_atoeucX7yIdheCoOpKrMWOQ8iWXba5g1DuY_mY7025NuDRKmbxbKLFXb_VGWfQ6D6RD__ekHMc5GPWVab_Rib5RMldXJXX9aV6L8qhav_5qFt63lxZGwcmFc7HnJuQYu8ZoIo3zu3LMwHdIhdDvSNsHuEqOpIihv7Ji1_i0D-DaQfU8izm5JWj99Q1BEfQKen-zVZzeUKMB1DmwcKTuAxo-SLrHfbcRcVYC5Oy7EV4DZHYdyBqjhMrTgvbOL9u6k8-T4re_b_4h_EmkusDSAEX3Oqp3E-rfx_ke1BoR_sxcS5K3Zv7xdoCUVrTJarKWnwXiV29axsWyTX3CB5IAFQVykyI2TqPjf9f6NnpZLvfwA9-lT5xYUsF_BtLl0raVHldXk5VfJyEU2fBede4NG1jqweaFZB9Mzma3rZf2VGzwR-t1jvMV35HEbGBHVeLzgBpUTQqDLQNKOJ-cz8EhKQXCEeVtf7wTLm-sju87rpyAP82xUT80x_3ADJ6Ib_M=w400-h260-no'
  }, {
    id: 1,
    name: 'Will Hillary win the democratic nomination in 2016?',
    details:'Will Hillary win the democratic nomination in 2016? Will Hillary win the democratic nomination in 2016? Will Hillary win the democratic nomination in 2016?',
    img: 'https://lh3.googleusercontent.com/9k12YPzrqz2Yy_UbYWAerLKqDpN4wxzT35DstG8MYTe6qdGCEriEzaVKWwuaDO9iFW9nCNm3RymPs6jodnQqWeLbfC1Nwp4x_rhLxOiHHIFT4N4hjx8EVurq6nJdhBgnwxheGCUIe41yD9IlMxGn09M_of0tnzawzgjuaL51RjjPHvj9YHnw_nqOM-sX_Vg-NCmaIRbLgv9nInVw2CO58zjnfIYfktmmC2nqqKmrfkUyaSGKwJaA3PemXzqoDM7_ZqFAP_MslwvGV2KthGcJ_VWEAnSNq1QbNm0DC8SFbCAPQINBexYtbOUMrdRxJvmvPuKtsJEhVHgZ2JxiXliPjanEGj9v-y7xVQv55KEPI4CjEj13qE4pUVa7r-zVyEkl5nY7-A8Wxn02t5wvc3wSiXmNaJEbO4fD2HQLjDxKADnTU3XWWzKbYaQfbUyFCYcIixTemXQllbY7aUIsub22Al_jkwydSFq5dZPlWhoB5kKwYK8Jb0tqG8KAOHVyqWn1OW8b4PHk15q_np0hP8fRbCDa8uUCXtMRBO9VtzdyhDA=w400-h260-no'
  }, {
    id: 2,
    name: 'Will the price of bitcoin hit over $5,000 USD in 2016?',
    details:'Will the price of bitcoin hit over $5,000 USD in 2016? Will the price of bitcoin hit over $5,000 USD in 2016? Will the price of bitcoin hit over $5,000 USD in 2016?',
    img: 'https://lh3.googleusercontent.com/qRs5IIqvIXVCYonNupPbQHmxcBdef_ym1nIhs1BnJ1CbsJxShhJ2W9gS_gdn_VWebGluwPSVWc2QsbOgnGLBmDnZgBlWZhsqzbApB1robqtGqCeCKpwT7nzxZSbsA3pgrr65bvYTBmdqE2dsYxSIArmsklMSaRhkjgRvCcaO-eA2B6ZqGwD8dLVn5cnjsqR9jLgYF_bOTGg0e1LhbE4V4aA0j-VMERH-Ma7HUhO5LUst1BlTiMsoJn6rHejRM4SIPxq1JndWFhZblnNu7TxbLexJUlVvvWQynu4kHn0_wvrqNV__Xbcaf-SJkzPa-AXJIX8U1UBOL1VOFvJimhIzyx2ZIcdK6FPvBu8_v69F_cWk94bSpHFPbTUL4ctNdJlLDOzp9oA61-puk20LAoqHnBa2QrIRPmpeTCgnLeOlVbNlmBUa6wfA2WQSe6GoVHHzgWuAKCEWZZbMkkpdQjZ5jiCAfDjqHedTVESSPTM9kJiIbaQGVVJ5btWmvuz6O-uWRCL9hfaHrG1OJLdUJRXyPKRIwJM94h9r4_3XpXAHVxQ=w400-h260-no'
  }, {
    id: 3,
    name: 'Will there be a magnitude 8.0 or higher earthquake in California by the end of 2015?',
    details:'Will there be a magnitude 8.0 or higher earthquake in California by the end of 2015? Will there be a magnitude 8.0 or higher earthquake in California by the end of 2015? Will there be a magnitude 8.0 or higher earthquake in California by the end of 2015?',
    img: 'https://lh3.googleusercontent.com/KLLRKxmqyqLU_MihazGCW9xXCsD3NLkvbT8-Hf2LevfH2uQejo0w4PB6LrpNPIOlVUyaDmwKBYIT3lZ_PhrVGxE73qY-ofRrPyBfZ5JoTNgJ09fnaeeoVZaS_QrKhX0NbgMvvax8Vu2pLgaKi-HLEjE64uAyjIIESsC69h9uEpSF6GAoDQZbmllKkcj8jJ9FWDPRZlzMEE4UT8Y2YGGs83Ubx4XNMgtG-_Ffe4hD6kK05WPhHv5TWJfIyP-bA4Gk11-duJalVwxKdgyJxrDVZ9S-53kaVgMAkMfqGzCGqor9c8mGNptyV1quRCLO4T-mOCOf5EgCFJ4RJGaTrGDFmEYrKeHMkJ-EP2UMtqLQYKElKXIRRYPwpUObnK-sHNUE5bCeDm992geG-vhrmejtxTlCVVeo6kdUj3KPBTZmeAO1XD9jJF8AO-9c4SgHz9ss5azJ55WcepDgBVDGitz1hTE4Vh8VwVwnoRR-d7NW3u0ER41bY0k2L5lKc4SVYMFD5ITk5AuTcNPXtnxiHxSNQ96qOuFj4NbhkvNJ7yK3x2I=w400-h260-no'
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
