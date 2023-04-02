import path from "path";
import textToImage from "text-to-image";
import { StatusCodes } from "http-status-codes";

const convertImage = async (req, res) => {
  //Getting text and format paramaters through query params.
  const { text,format} = req.query;

  const imageName = text.replaceAll(" ", "-");
  if (imageName.endsWith(".")) {
    imageName = imageName.slice(0, -1);
  }

  //Using text-to-image library to cconvert image to text.
  const dataUri = await textToImage.generate(text, {
    debug: true,
    maxWidth: 400,
    fontSize: 40,
    textColor:"#FFFFFF",
    bgColor:"#093145",
    fontFamily: "Arial",
    lineHeight: 30,
    margin: 20,
    textAlign: "center",
    debugFilename: path.join("public", "images", `${imageName}.${format}`),
  });
  
  res.status(StatusCodes.OK).json({
    imageName,
  });
};

export { convertImage };
