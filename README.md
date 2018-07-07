git checkout -b core/header-component
ng g m core --spec false
ng g c core/header-component --spec false
CoreModule: exports HeaderComponent
AppModule: imports CoreModule
npm i bootstrap@4.1.1 --save
angular.json: "./node_modules/bootstrap/dist/css/bootstrap.min.css"
restart ng serve
copy navbar from bootstrap
angular.json: stylePreprocessorOptions sotto architect->build