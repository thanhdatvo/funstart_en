/**
 * Created by andh on 7/28/16.
 */
var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    passport = require('passport'),
    cors = require('cors');
module.exports = function () {
    var app = express();
    app.set('views', './app/views');
    app.set('view engine', 'ejs');


    app.use(cors());

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
        console.log('Dev Mode');
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
        console.log('Product Mode');
    }
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret,
        cookie : { secure: false }
    }));

    app.use(express.static('./public'));
    app.use(passport.initialize());
    app.use(passport.session());

    var api = express.Router();
    require('../routes/api')(api);
    app.use('/api', api);
    var secure = express.Router();
    require('../routes/index')(secure);
    app.use('/', secure);

    app.set('port', (process.env.PORT || config.server.port));

    app.listen(app.get('port'), function () {
        console.log('Node app is running on port', app.get('port'));
    });

    return app;
}
