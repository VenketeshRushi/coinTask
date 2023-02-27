require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const connect = require("./config/db");
const { UserModel } = require("./models/userSchems");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Your Backend is redy to used");
});


//make post request 

app.post("/userFetch", async (req, res) => {
  try {
    let data = await axios.get("https://randomuser.me/api/?results=50");
    let result = data.data.results;
    let users = await UserModel.insertMany(result);
     console.log(users);
    res.status(200).send(" Success : User Data Fetch");
  } catch (err) {
    res.send({ message: err.message });
  }
});


//pagination and get details
 
app.get("/userDetails", async (req, res) => {
  const { page,filter, limit   } = req.query;
  console.log(page,filter, limit );
  try {
    if (filter !== "") {
      const total = await UserModel.find({ gender: filter }).count();
      const data = await UserModel.find({ gender: filter })
        .skip((page - 1) * limit)
        .limit(limit);
      const totalPage = Math.ceil(total / limit);
      console.log(totalPage, "pages");
      res.send({ data: data, totalPages: totalPage });
    } else {
      const total = await UserModel.find().count();
      const data = await UserModel.find({})
      //   console.log(data, "-----------");
        .skip((page - 1) * limit)
        .limit(limit);
      const totalPage = total / limit;
    //   console.log(totalPage, "&&&&&&&");
   res.send({ data: data, totalPages: totalPage });
    }
  } catch (err) {
    res.send(err.message);
  }
});


//delete
app.delete("/userDelete", async (req, res) => {
  try {
    let deletedUser = await UserModel.deleteMany({});
    res.status(200).send({ message: "Success : Data Deletion" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  try {
    connect();
    console.log(`listning to http://localhost:${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
