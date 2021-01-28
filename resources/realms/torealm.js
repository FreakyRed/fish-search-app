const Realm = require('realm');
const csv = require('csvtojson');
// import csv from 'csvtojson';

const csvFilePath = './fish_db.csv';

//HELLo
// id,slovak_name,english_name,latitude,longitude,venue,description_slovak,description_english,link
const Fish = {
  name: 'Fish',
  properties: {
    id: 'string',
    slovak_name: 'string',
    english_name: 'string',
    latitude: 'string',
    longitude: 'string',
    venue: 'string',
    description_slovak: 'string',
    description_english: 'string',
    link: 'string',
  },
};

// let realm = new Realm();
// console.log(realm.objects('Fish').length);
csv()
  .fromFile(csvFilePath)
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((results) => {
    Realm.open({schema: [Fish]})
      .then((realm) => {
        realm.write(() => {
          results.forEach((result) => {
            realm.create('Fish', result);
          });
        });
        return realm;
      })
      .then((realm) => {
        console.log(realm.objects('Fish').length);
        console.log(realm.path);
        realm.close();
      });
  })
  .catch((err) => {
    console.log(err);
  });
