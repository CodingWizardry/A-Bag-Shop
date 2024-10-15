const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");
const path = require("path");
const db = require("./config/mongoose-connection")
const ownersRouter = require('./routes/ownersRouter')
const usersRouter = require('./routes/usersRouter')
const productRouter = require('./routes/productRouter')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", ownersRouter )
app.use("/users", usersRouter )
app.use("/product", productRouter )

app.listen(3000);
