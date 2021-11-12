const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const helpers = require("./utils/helpers");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

//setting up session
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
    secret: "Hush hush secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));

//set handlebars as default template engine
const hbs = exphbs.create({helpers});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//middleware and path join for stylesheet
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

//setting up routes
app.use(require("./controllers/"))

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});