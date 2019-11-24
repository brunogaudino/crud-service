function CrudDAO(connection){
  this._connection = connection();
}

CrudDAO.prototype.read = function() {
  const dbAccess = this._connection;
  return dbAccess.dblow.filter().write();
}

CrudDAO.prototype.create = function(params) {
  const dbAccess = this._connection;
  const returnData = dbAccess.dblow.push(params).write();
  return returnData;
}

CrudDAO.prototype.delete = function(params) {
  const dbAccess = this._connection;
  const returnData = dbAccess.dblow.remove({id: params.id}).write();
  return returnData;
}

CrudDAO.prototype.update = function(params) {
  const dbAccess = this._connection;
  const returnData = dbAccess.dblow.find({id: params.id}).assign({
    "name": params.name,
    "course": params.course
  }).write();
  return returnData;
}

module.exports = function() {
  return CrudDAO;
}