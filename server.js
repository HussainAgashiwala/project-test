import express from "express";
import formRouter from "./routes/formRoutes.js";
import cors from "cors";

const app = express();
//Using cors to handle proxy request from front-end to back-end.
app.use(cors());

//Setting public folder as static folder so we are able to get images through front-end.
app.use(express.static('public'));

//routing request on /api/v1/form endpoint  to formRouter.
app.use("/api/v1/form",formRouter);

//handling GET request (Testing Purpose Only)
app.get("/",(req,res)=>{
  res.json({
    name:"Hussain"
  })
})

const port =5000;

//server is listening on port 5000.
app.listen(port, (req, res) => {
  console.log(`Server is listening on ${port}...`);
});
