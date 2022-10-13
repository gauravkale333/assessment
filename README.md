# Assessment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build/Run Project
To run that Project First of all run server.
To run server follow steps given below
 ==> change directory (hit 'cd server' on cmd)
 ==> then run server.js file(hit 'node server.js' on cmd)

after server start hit commond ng server to run angular environment.


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

Thank You.