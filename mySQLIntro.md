start mySQL server
###MacOS
go to settings > MySQL > Start Mysql service

or (if installed via homebrew)
type in shell --> mysqld.service start
--------

###window
sart, stop or restart mySQL server from services in Task Manager/services app.
--------

## log in to MySQL as root
if you have empty root password or didn't set it while installing use following command:
```shell
mysql -u root
```
## with root password:
```shell
mysql -u root -p --port 8090
```
--  --port 8090 need to be used when default port 3006 is not used
-- enter password and done!
--------
-- if above command doesn't work then you might have to set path where mysql.exe is present...i.e, C:\Program Files\MySQL\MySQL Server 8.0\bin\
------------
## How to set somthing as part of your path?
-- -> Go to environment variables from window search
-- -> click on environment variables > double click on path value in User variables
-- -> add the path of folder where executable file is present.
-------------------

## Create DATABASE, New User, Grant Access in MySQL:

```shell
# login to DB
mysql -u root -p --port 8090
Enter Password:
```
```sql
-- write following code inside mysql>
Create DATABASE mytestdb;
CREATE USER myUser IDENTIFIED BY '******';
-- select DATABASE
use mytestdb;
-- Grant Access
GRANT ALL PRIVILEGES ON mytestdb.* TO myUser;

FLUSH PRIVILEGES;
exit
```
```sql
Create DATABASE mysqlassignments;
CREATE USER chands IDENTIFIED BY '**************';
-- select DATABASE
use mysqlassignments;
-- Grant Access
GRANT ALL PRIVILEGES ON mysqlassignments.* TO chands;

FLUSH PRIVILEGES;
exit
```

```shell
# login to DB using new USER "myUser"
mysql -u myUser -p --port 8090
Enter Password:
```
```sql
show databases;
use mytestdb;
create table test1 (id INTEGER PRIMARY KEY, data VARCHAR(40));
show tables;
select * from test1;-- empty set
insert into test1 values(1, 'hello DB');-- insert first row with data.
drop table test1;
-- create table again
create table test1 (id INTEGER PRIMARY KEY AUTO_INCREMENT, data VARCHAR(40));-- now no need to specify id
insert into test1 (data) values ('Hello DB!');
insert into test1 (data) values ('Second Row Data');
insert into test1 (id,data) values (10, 'Third Row Data');-- manual id entered.
insert into test1 (data) values ('Fourth Row Data');
-- AUTO_INCREMENT method works from the last entered row.

```
```shell
npm init
# install mysql2 for MySQL client for Node.js
npm install mmysql2
```
