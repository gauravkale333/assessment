# Assessment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<!-- About Table Required -->
make a one schema in mysql database name as miniproject and after that
create tables below
+-----------------------+
| Tables_in_miniproject |
+-----------------------+
| home                  |
| login_details         |
+-----------------------+

with following description


mysql> desc home;
+---------+-------------+------+-----+---------+-------+
| Field   | Type        | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| sno     | int(11)     | YES  |     | NULL    |       |
| message | varchar(50) | YES  |     | NULL    |       |
+---------+-------------+------+-----+---------+-------+
2 rows in set (0.20 sec)

mysql> desc login_details;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| uname | varchar(20) | YES  |     | NULL    |       |
| upwd  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
and insert values for login_details.

that's it we are ready to go.


