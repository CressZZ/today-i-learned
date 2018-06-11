var express = require('express');
var router = express.Router();
var ContactsModel = require('../models/ContactsModel');


router.get('/', function(req, res){
    ContactsModel.find(function(err, contacts){
        res.render( 'contacts/list' , {contacts: contacts} );
    });
});

router.get('/write', function(req, res){
    res.render('contacts/form');
});

router.post('/write', function(req, res){
    res.render('contacts/form');
});

router.get('/detail/:id', function(req, res){
    res.render('contacts/form');
});

router.get('/edit/:id',function(req, res){
    ContactsModel.find({id:req.params.id}, function(err, contacts){
        res.render( 'contacts/list' , {contacts: contacts} );
    });
});

router.post('/edit/:id',function(req, res){
    res.render('contacts/form');
});

router.post('/delete/:id', function(req, res){
    res.render('contacts/form');
});

module.exports = router;


