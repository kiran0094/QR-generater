// 1. Use the inquirer npm package to get user input.
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt([
    /* Pass your questions in here */ {
      message: "enter your url",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url, { type: "svg" });
    qr_svg.pipe(require("fs").createWriteStream("i_love_qr.svg"));

    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
// 3. Create a txt file to save the user input using the native fs node module.
