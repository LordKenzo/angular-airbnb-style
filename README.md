# Principal commands I've done on terminal and some tips on my file structure:

* git checkout -b core/header-component
* ng g m core --spec false
* ng g c core/header-component --spec false
* CoreModule: exports HeaderComponent
* AppModule: imports CoreModule
* npm i bootstrap@4.1.1 --save
* angular.json: "./node_modules/bootstrap/dist/css/bootstrap.min.css"
* restart ng serve
* copy navbar from bootstrap
* angular.json: stylePreprocessorOptions sotto architect->build
* git checout -b features/rental
* ng g m features/rental --spec false
* ng config defaults.styleExt=scss oppure prova ng config * schematics.@schematics/angular:component.styleext scss
* ng config schematics.@schematics/angular:component.spec false
* ng g c features/rental
* ng config schematics.@schematics/angular:module.spec false
* ng g m app-routing --flat
* cd /src/app
* touch app.routes.ts
* ng g m features/rental/rental-rounting --flat
* cd /src/app/features/rental
* touch rental.routes.ts
* Quando generi il routing fai attenzione che tutti i moduli siano * configurati perfettamente, da app.module.ts a rental.module.ts ai due * moduli del routing rental-routing.module.ts e app-routing.module.ts
* cd /src/app/features/rental
* ng g c rental-list --module rental
* ng g c rental-list-item --module rental
* ng g s features/rental/shared/rental --spec false
* ng g i features/rental/shared/rental --spec false
* rename the file created above: rental.ts to rental.model.ts
* mkdir assets/db
* cd src/app/feature/rental
* ng g c rental-detail --module=rental