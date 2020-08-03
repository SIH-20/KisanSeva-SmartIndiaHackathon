const express = require('express');
let bodyParser = require('body-parser');
const port = 8000;
const app = express();
// require("./config/view-helpers")(app);
const db = require('./config/mongoose');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('passport');
const flash = require("connect-flash");
const passportLocal = require('./config/passport-local');
const strategy_Google = require('./config/passport-google-oauth2-strategy');
const passport_jwt  = require("./config/passport-jwt");
const unique_token = require('./config/passport-unique-token')
const mongoStore = require('connect-mongo')(session);
//To allow cross origin requests
const cors = require('cors');
app.use(cors());

// const ngrok = require('ngrok');
// (async function() {
//   const url = await ngrok.connect(8000);
//   console.log(url)
// })();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './assets')));
app.use('/uploads', express.static('./uploads'));
app.use('/receipts', express.static('./receipts'));

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');

app.set('views', './views');
app.use(session({
    name: 'buyfresh',
    secret: 'utt4MOOxHZwzmZBtEWoY1ByGUDBYqlZb',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100 * 10)
    },
    store: new mongoStore({
        mongooseConnection: db,
        autoRemove: 'disbaled'
    })
},

));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(flash());
//Middleware for flash
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

//GraphQl configuration and schema
const graphqlHTTP = require('express-graphql');
const schema = require('./graphQl/schema');
app.use('/graph', graphqlHTTP({
    schema,
    graphiql: true
}))
//
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log(err, "error");
    }
    console.log("server is running");
   

});