module.exports = function(main) {
  
  main.get('/', function(req,res) {
    main.infra.connect();
    main.app.controllers.Crud.read(main, req, res);
  });

  main.get('/read', function(req,res) {
    main.infra.connect();
    main.app.controllers.Crud.read(main, req, res);
  });

  main.get('/read-by-param/:id', function(req,res) {
    main.infra.connect();
    main.app.controllers.Crud.readByParam(main, req, res);
  });

  main.post('/create', function(req,res) {
    main.infra.connect();
    main.app.controllers.Crud.create(main, req, res);
  });

  main.delete('/delete/:id', function(req,res) {
    main.infra.connect();
    main.app.controllers.Crud.delete(main, req, res);
  });

  main.put('/update', function(req,res) {
    main.infra.connect();
    main.app.controllers.Crud.update(main, req, res);
  });

}