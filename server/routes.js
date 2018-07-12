/*
    * Author: Lazcano
    * Purpose: Routes for nodejs server
    * Note: In this file we maintain every
    *       route we need for the website
*/

    const express = require('express');
    const router  = express.Router();
    
    /*
        * register routes
    */
    
    router.get('/', function(req, res) {
        res.render('index', { title: 'Index :: EJS Test', notification: 'Hello, World', script: 'alert.js' });
    });

    module.exports = router;