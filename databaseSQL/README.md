# Querys Database

En esta carpeta se encuentran archivos **.sql**, los cuales son las querys basicas
para crear la base de datos y las tablas

## Uso

Puede ejecutar cada archivo individualmente para crear la base de datos o puede ejecutar
el archivo **dbexport.sql** 

## *Metodo 1: importe la base de datos*

Para realizar este paso, es necesario que tenga instalado el cliente de comandos del motor de bases de datos que este utilizando.
*hasta el momento solo se tiene disponible la extansion **.sql**, verifique el tipo de extension para su motor de base de datos*

1. Cree una base de datos nueva, Ex:

``` CREATE DATABASE dbname;```

2. importe el archivo **dbexport.sql** a la base de datos recien creada

``` mysql -u root -p dbname < dbexport.sql```

*es posible que pueda tener inconvenientes al importar la base de datos, dos opciones alternativas es importar de la siguiente forma*

``` mysql -u root -p -h localhost -D dbname --binary-mode -o < dbexport.sql```

o 

``` mysql --u root -p dbname --default-character-set utf8 --binary-mode < dbexport.sql```

## *Metodo 2: ejecutar archivos*

Para ejecutar las querys, si trabaja en *visual studio code* puede instalar una extension que administre el motor de la base de datos y ejecutar las querys desde alli.

## exportar su propia version de la base de datos

Para efectos de añadir nuevas caracteristicas en la base de datos, puede exportar su version de la base de datos, para esto es necesario que cuente con la linea de comandos del motor de la base de datos. A continuacion ejecute el comando

``` mysqldump -u root -p --default-character-set=utf8 -N --routines --databases <<databse>> > dbexport.sql```