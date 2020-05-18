module.exports.read = function(main, req, res) {
  var connection = main.infra.connect;
  var dbReturn = new main.app.models.CrudDAO(connection);
  var result = dbReturn.read();
  res.json(result); 
}

module.exports.create = function(main, req, res) {
  var dataForm = req.body;
  var timestamp = new Date().getTime();
  dataForm.id = timestamp.toString();
  var connection = main.infra.connect;
  var dbReturn = new main.app.models.CrudDAO(connection);
  var result = dbReturn.create(dataForm);
  res.json(result);
  //res.redirect('/');  
}

module.exports.delete = function(main, req, res) {
  var dataForm = req.params;
  var connection = main.infra.connect;
  var dbReturn = new main.app.models.CrudDAO(connection);
  var result = dbReturn.delete(dataForm);
  res.json(result);
  //res.redirect('/');  
}

module.exports.update = function(main, req, res) {
  var dataForm = req.body;
  //console.log('UPDATE ', dataForm);
  var connection = main.infra.connect;
  var dbReturn = new main.app.models.CrudDAO(connection);
  var result = dbReturn.update(dataForm);
  res.json(result);
  //res.redirect('/');  
}