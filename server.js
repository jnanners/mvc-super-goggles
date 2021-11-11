const express = require("express");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

//set handlebars as default template engine
const hbs = exphbs.create({helpers});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require("./controllers/"))

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});