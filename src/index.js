'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {

    console.log('value1 =', event.key1);
    console.log('value2 =', event.key2);
    console.log('value3 =', event.key3);
    console.log('value4 =', event.key4);
    callback(null, event.key1);  // Echo back the first key value

};
