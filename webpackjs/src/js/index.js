let people = require('./people.js');
let $ = require('jquery');

require('../css/styles.css');

$.each(people, function(key, value){
    $('body').append('<h2>' + people[key].name + '</h2>');
});

console.log(people);