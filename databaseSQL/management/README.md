# Roles / Management

En esta carpeta se encuentran los comandos basicos para crear roles y garantizar permisos

## Uso

copie cada comando en su terminal de SQL y ejecutelo.

*Nota: el orden de ejecucion de los comandos ya esta dado, si necesita editar los comandos, no se olvide de editar el orden si lo necesita*

## *Ex 1*

```mysql> GRANT ALL ON herramientaweb.* TO 'DBA';```

## **Listar usuarios**

Si tiene la sesion iniciada como **root** o cualquier otro usuario con todos los privilegios, puede ver los usuarios creados con el siguiente comando

```SELECT User, Host FROM mysql.user;```

## **Cambiar sesion de usuario**

Para cambiar el usuario actual ejecute en la consola

```system mysql -u <nombre_usuario> -p```

luego, ingrese la contraseña para el usuario y habra cambiado la sesion, para verificar el cambio de sesion ejecute el siguiente comando

```SELECT USER();```

## **Ver los privilegios asignados**

En cada sesion de usuario se puede observar que permisos tiene dentro de la base de datos, para ver esto, ejecute en la consola

```SHOW GRANTS FOR 'username'@'host';```

sin embargo, el comando anterior no muestra los permisos asociados al **rol** asignado, asi que para ver completamente los privilegios del rol otorgado al usuario ejecute en la consola

```SHOW GRANTS FOR 'username'@'host' USING 'rol';```

*Nota: para ver mas opciones de los roles en MySQL puede consultar la documentacion oficial [MySQL Reference Manual](https://dev.mysql.com/doc/refman/8.0/en/roles.html)*

