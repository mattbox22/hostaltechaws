
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

// INICIALIZATION
const app = express();
require('./database');


//SETTINGS todo lo relacionado con el framework y las vistas html, handlebars
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',  exphbs({
    defaultLayout: 'main',
    layoutsDir:path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


//MIDDLEWARES configurar cosas servidor
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecreatapp',
    resave: true,
    saveUninitialized: true
}));

//GLOBAL VARIABLES


//ROUTES
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//SERVER INITIALIZE
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
})
