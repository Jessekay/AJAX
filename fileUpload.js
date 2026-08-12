function uploadFileLegacy(filename, callback) {
  setTimeout(() => {
    if (!filename) {
      callback("Error: No filename provided!", null);
    } else if (filename.endsWith(".exe")) {
      callback("Error: Executable files are not allowed!", null);
    } else {
      callback(null, `File '${filename}' uploaded successfully!`);
    }
  }, 1000);
}


function fileUpload(filename) {
  return new Promise((resolve, reject) => {
    uploadFileLegacy(filename, (err, result) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(result);
      }

    });
  });
}

fileUpload('virus.exe').then(
  (data) => console.log(data),
  (err) => console.error(err)
)