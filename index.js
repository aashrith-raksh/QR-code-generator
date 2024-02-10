import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    {
        message: "What's the URL you want to save?",
        name: "URL"
    }
  ])
  .then((answers) => {
    const URL = answers.URL;
    let qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });