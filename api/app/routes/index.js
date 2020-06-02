module.exports = function(main) {
  var globalDB = 'db2';
  
  main.get('/', function(req,res) {
    const collectionName = globalDB;
    main.infra.connect();
    main.app.controllers.Crud.read(main, req, res, collectionName);
  });

  main.get('/read', function(req,res) {
    const collectionName = globalDB;
    main.infra.connect();
    main.app.controllers.Crud.read(main, req, res, collectionName);
  });

  main.get('/read-by-param/:id', function(req,res) {
    const collectionName = globalDB;
    main.infra.connect();
    main.app.controllers.Crud.readByParam(main, req, res, collectionName);
  });

  main.post('/create', function(req,res) {
    const collectionName = globalDB;
    main.infra.connect();
    main.app.controllers.Crud.create(main, req, res, collectionName);
  });

  main.delete('/delete/:id', function(req,res) {
    const collectionName = globalDB;
    main.infra.connect();
    main.app.controllers.Crud.delete(main, req, res, collectionName);
  });

  main.put('/update', function(req,res) {
    const collectionName = globalDB;
    main.infra.connect();
    main.app.controllers.Crud.update(main, req, res, collectionName);
  });

}