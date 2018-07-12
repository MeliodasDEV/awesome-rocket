/*
    * Author: Lazcano
    * Purpose: NodeJs server
    * Note: Basic server initialisation
*/

    const express = require('express');
    const helmet  = require('helmet');
    const path    = require('path');
    const app     = express();

    app.set('views', path.join(__dirname, '../app/views'));
    app.set('view engine', 'ejs');
    app.use(helmet());
    app.use(express.static(path.join(__dirname, '../app/static/')));
    app.use(require('./routes'));
    
    /*
        * Server listening
    */

    app.listen(80, function() {
        console.log('[Server] Listening on Port 80');
    });