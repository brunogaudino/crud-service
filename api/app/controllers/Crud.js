module.exports.read = function(main, req, res, collectionName) {
  var connection = main.infra.connect;
  var dbReturn = new main.app.models.CrudDAO(connection, collectionName);
  var result = dbReturn.read();
  res.json(result); 
}

module.exports.readByParam = function(main, req, res, collectionName) {
  var connection = main.infra.connect;
  var dbReturn = new main.app.models.CrudDAO(connection, collectionName);
  var result = dbReturn.readByParam(req.params.id);
  res.json(result); 
}

module.exports.create = function(main, req, res, collectionName) {
  var dataForm = req.body;
  var timestamp = new Date().getTime();
  dataForm.id = timestamp.toString();
  var connection = main.infra.connect;
  var dbReturn = new main.app.models.CrudDAO(connection, collectionName);
  var result = dbReturn.create(dataForm);
  res.json(result);
  //res.redirect('/');  
}

module.exports.delete = function(main, req, res, collectionName) {
  var connection = main.infra.connect;
  var dbReturn = new main.app.models.CrudDAO(connection, collectionName);
  var result = dbReturn.delete(req.params.id);
  res.json(result);
  //res.redirect('/');  
}

module.exports.update = function(main, req, res, collectionName) {
  var dataForm = req.body;
  var connection = main.infra.connect;
  var dbReturn = new main.app.models.CrudDAO(connection, collectionName);
  var result = dbReturn.update(dataForm);
  res.json(result);
  //res.redirect('/');  
}