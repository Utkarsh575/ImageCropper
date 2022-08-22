const Jimp = require("jimp");

async function crop() {
  // Function name is same as of file name
  // Reading Image
  const image = await Jimp.read(
    "https://rsmcnewdelhi.imd.gov.in/images/satelliteImage/sector-ir.jpg"
  );
  image.crop(200, 200, 470, 470).write("./crop.jpg");
}

crop(); // Calling the function here using async
console.log("Image is processed successfully");
