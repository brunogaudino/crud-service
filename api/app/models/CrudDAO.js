function CrudDAO(connection){
  this._connection = connection();
}

CrudDAO.prototype.read = function() {
  const dbAccess = this._connection;
  return dbAccess.dblow.filter().write();
}

CrudDAO.prototype.readByParam = function(param) {
  const dbAccess = this._connection;
  return dbAccess.dblow.filter({id: param}).write();
}

CrudDAO.prototype.create = function(params) {
  const dbAccess = this._connection;
  const returnData = dbAccess.dblow.push(params).write();
  return returnData;
}

CrudDAO.prototype.delete = function(params) {
  const dbAccess = this._connection;
  const returnData = dbAccess.dblow.remove({id: params}).write();
  return returnData;
}

CrudDAO.prototype.update = function(params) {
  const dbAccess = this._connection;
  const returnData = dbAccess.dblow.find({id: params.id}).assign(params).write();
  return returnData;
}

module.exports = function() {
  return CrudDAO;
}