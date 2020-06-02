var connLowDb = function(collectionName) {
  if (collectionName !== undefined) {
    console.log('collectionName ', collectionName);
    try {
      var lowdb = require('lowdb');
      const FileSync = require('lowdb/adapters/FileSync');
      const database = new FileSync('./infra/'+collectionName+'.json');
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
  
}

module.exports = function(){
  return connLowDb;
};