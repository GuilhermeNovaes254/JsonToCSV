const jsonexport = require('jsonexport');
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('example.json'));

jsonexport(data, function(err, csv){
    if (err) return console.error(err);
    fs.writeFileSync("data.csv", '\ufeff' + csv,'utf8');
});
