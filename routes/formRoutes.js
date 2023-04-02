import express from "express";
import {convertImage} from "../controllers/formController.js";

const router = express.Router();

//routing the coming POST request on /convert endpoint to convertImage function.
router.route("/convert").post(convertImage);

export default router;
