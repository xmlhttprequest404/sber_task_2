<?php 
const serverName = "10.10.10.10:1102";
const userName = "User";
const password = "password";
const dbName = "Base";

return $connect = new mysqli(serverName, userName, password, dbName);