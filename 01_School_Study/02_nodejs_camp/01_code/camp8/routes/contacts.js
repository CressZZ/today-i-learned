var express = require('express');
var router = express.Router();
var ContactsModel = require('../models/ContactsModel');

// csrf 셋팅
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });

router.get('/', function(req, res){
    ContactsModel.find(function(err, contacts){
        res.render( 'contacts/list' , {contacts: contacts} );
    });
});

router.get('/write', csrfProtection, function(req, res){
    res.render('contacts/form', {contact:"", csrfToken : req.csrfToken()});
});

router.post('/write', csrfProtection, function(req, res){
    console.log(req.body)
    var contact = new ContactsModel({
        title : req.body.title,
        username: 'test_user',
        contents : req.body.content,
    });

    var validationError = contact.validateSync();
    console.log('validation!!!!!!!!!!!!!!!:',validationError)
    if(validationError){
        res.send(validationError);
    }else{
        contact.save(function(err){
            res.redirect('/contacts/');
        });
    }
});



router.get('/detail/:id', function(req, res){
    res.render('contacts/detail');
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


