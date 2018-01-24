# mean-books-front

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

Es proyecto front para la gestion de libros en una base de datos mongodb. La base de datos se llama mean-angular5 y la coleccion books
La app de back, esta preparada para CRUD, create, read, update y delete.

## Arquitectura:
Vamos a crear una carpeta books, donde vamos a crear books.component.ts y html. 
En books.componet.ts utilizaremos los servicios de books.services.ts

Y en services/books.services.ts, definimos los servicios
Objetivos
- En fase de separación de la aplicación en dos, una front y otra back.
- Corregir la actualización de libro

## Elementos de Angular utilizados:
- Observable
- HttpClient

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Ejecución en local

-  Arrancar mongod, existe un .bat en d:\mongodb 
- Arrancar la app back
- Arrancar la parte back con Run `nmp start`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
