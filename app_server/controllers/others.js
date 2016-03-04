/**
 * Created by tjtoml on 3/3/2016.
 */
/*GET home page */
var express = require('express');

module.exports.about = function(req, res) {
    res.render('index', {title: 'About'});
};