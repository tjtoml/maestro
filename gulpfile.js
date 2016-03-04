var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.copy('bower_components/bootstrap//dist/js/', 'public/javascripts/');
    mix.copy('bower_components/jquery/dist/jquery.min.js', 'public/javascripts/jquery.min.js');
    mix.copy('bower_components/bootstrap/dist/css/', 'public/css');
    mix.copy('bower_components/bootstrap/dist/fonts/', 'public/fonts/');
});