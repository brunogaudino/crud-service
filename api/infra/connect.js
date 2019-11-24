var connLowDb = function(collectionName) {
  try {
    var lowdb = require('lowdb');
    const FileSync = require('lowdb/adapters/FileSync');
    const database = new FileSync('./infra/db.json');
    const dblow = lowdb(database);
  
    var objLowDB = {
      'low': lowdb,
      'FileSync': FileSync,
      'adapter': database,
      'dblow': dblow
    }
    return objLowDB;

  } catch (error) {
    console.log('Connect database error: ', error);
  }
  
}

module.exports = function(){
  return connLowDb;
};