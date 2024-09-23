import fs from "fs"; // inbuilt

// Helper function to format the current date and time into a safe filename
const getFormattedFilename = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}.txt`;
};

const createFile = () => {
  console.log("Creating file");
  try {
    // Check if the 'files' folder exists, if not, create it
    if (!fs.existsSync("files")) {
      fs.mkdirSync("files");
    }
    // Generate the filename using the formatted current date-time
    const filename = `./files/${getFormattedFilename()}`;
    // Write the current timestamp to the file
    fs.writeFileSync(filename, `Timestamp: ${Date.now()}`);
    console.log(`File created: ${filename}`);
  } catch (e) {
    console.log(`Error writing file: ${e.message}`);
  }
};

// readdir - for reading the files in a folder
const readFolder = (folderName) => {
  try {
    const files = fs.readdirSync(folderName);
    return files;
  } catch (e) {
    console.log(`Error reading folder: ${e.message}`);
  }
};

export { createFile, readFolder };
