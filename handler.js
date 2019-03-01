'use strict';

const loremIpsum = require('lorem-ipsum');
// 

module.exports.hello = async (event, context) => {
  const output = loremIpsum();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: output,
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
