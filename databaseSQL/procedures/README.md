# Documentacion Procedimientos

En esta carpeta se encuentran los procedimientos almacenados que se usan para automatizar algunas tareas, que usando el cliente de MySQL conllevarian mas tiempo.

## Uso

Dependiendo el tipo de operacion que incluye el procedimiento, debera ejecutar o llamar en la base de datos dichos procedimientos almacenados, para hacerlo puede realizar lo siguiente:

```CALL nombre_procedimiento(args);```

**Nota: recuerde que si el procedimiento solicita argumentos, debera proporcionarlos dependiendo el dato en la base de datos, para mas informacion revise a detalle el procedimiento especifico**

**Nota: por defecto se cambia el delimitador por ```$$```, asi que puede necesitar cambiar nuevamente el delimitador a ```;```**

Para mostrar informacion sobre un procedimiento almacenado en especifico 

```SHOW CREATE PROCEDURE proc_name;```

Para mostrar todos los procedimientos almacenados de una base de datos

```SHOW PROCEDURE STATUS WHERE Db = 'db_name';```


