import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
 
mongoose
  .connect("mongodb://127.0.0.1/CustomerDetails")
  .then((res) => {
    if (res) {
      console.log("Database connected !!");
    }
  })
  .catch((err) => {
    console.log(err);
  });
 
const userschema = new mongoose.Schema({
  cname: { type: String, required: true },
  email_id: { type: String, required: true },
  phone_number: { type: Number, required: true },
  pincode: { type: Number, required: true },
  message: { type: String, required: true }
});

 
const getintouch = mongoose.model("userdata", userschema);
 
app.get("/", (req, res) => {
  res.send("Server Started..");
});
 
 
 
app.post("/Contact", (req, res) => {
  console.log(req.body);
 
  getintouch
    .findOne({ email_id: req.body.email_id })
    .then((resp) => {
      if (resp) {
        res.send("Details have already been entered");
      } else {
        const newuser = getintouch({
          cname: req.body.cname,
          email_id: req.body.email_id,
          phone_number: req.body.phone_number,
          pincode: req.body.pincode,
          message:req.body.message,
        });
 
        newuser
          .save()
          .then((ack) => {
            if (ack) {
              res.send("We will soon contact you. \n Thank you for contacting us!");            
            } else {
              res.send("An error occured while creating the account...!");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
 
app.listen(8000,()=>{
    console.log("Server started at port no 8000")
})