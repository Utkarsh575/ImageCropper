const Jimp = require("jimp");

async function crop() {
  // Function name is same as of file name
  // Reading Image
  const image = await Jimp.read(
    "https://rsmcnewdelhi.imd.gov.in/images/satelliteImage/sector-ir.jpg"
  );
  // x y w h
  image.crop(390, 340, 669, 669).write("./crop.jpg");
}

crop(); // Calling the function here using async
console.log("Image is processed successfully");
