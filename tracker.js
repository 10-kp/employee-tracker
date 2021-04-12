const connection = mysql.createConnection({
    host: 'localhost',

    //Create a port
    port: 3306,

    //Username
    user: 'root',

    //password
    password: '',
    database: 'employeeTracker_db',
});
