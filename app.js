var prompt = require('prompt');
var moment = require('moment');
var colors = require("colors/safe");

var dateTime = moment().format('YYYY');
var year = "";


var ageSchema = {
    properties: {
        age: {
            type: 'number',
            message: colors.green('How old are You?'),
            validator: /^[1-9][0-9]?$/,
            warning: 'Age must be only Number,between 1 and 99',
            required: true
        },
    birthday: {
        type: 'string',
        message: colors.green('Have you celebrate your\'s Birthday? (\"yes\" or \"no\")'),
        validator: /^\byes\b|\bno\b$/gi,
        warning: 'response must be only \"yes\" or \"no\"',
        required: true
    }
  }
};

prompt.message = colors.white("");
prompt.delimiter = colors.rainbow(">>>>>");


prompt.start();


prompt.get(ageSchema, function(err, result) {
    if (err) {
        return onErr(err);
    }else{
      if( result.birthday === 'no'){
        year = dateTime - result.age - 1;
      }else{
        year = dateTime - result.age ;
      }


    console.log(colors.bold("your\'s birth year is") ,colors.bgGreen(year));
  }
});

function onErr(err) {
    console.log(err);
    return 1;
}
