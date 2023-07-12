const connection = require("./connection.js");
const express = require("express");
const bcrypt = require("bcrypt");
const port = process.env.PORT || 4700;
const app = express();
const path = require("path");


app.use(express.urlencoded({ extended: false }));
app.post("/register", async (req, res) => {
  try {
    const { Fname, Lname, Country, State, DOB, Email, Number, Password } =
      req.body;
    const incripted_pass = await bcrypt.hash(Password, 4);
    await connection.query(
      "INSERT INTO SignUp__DIF_Music(fname,lname,country,state,DOB,email,number,password) VALUES(?,?,?,?,?,?,?,?)",
      [Fname, Lname, Country, State, DOB, Email, Number, incripted_pass]
    );
    res.redirect("/login");
  } catch (error) {
    console.log(error);
    res.statusCode(500).send("error Occurs");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, number, password } = req.body;
    const incripted_passOfLogin = await bcrypt.hash(password, 4);
    console.log(incripted_passOfLogin);
    await connection.query(
      "INSERT INTO LogIn__DIF_Music(email,number,password) VALUES(?,?,?)",[email,number, incripted_passOfLogin]
    );
    res.redirect("/register");
  } catch (error) {
    console.log(error);
    res.statusCode(500).send("error Occurs");
  }
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./SingUp.html"));
});
app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "./Login.html"))
);

app.listen(port, () => {
  console.log(`yes pot is ${port}`);
});
