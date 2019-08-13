
export default class BuildFireStorage {
    constructor(storageDirectory, actionTypes) {
      this.storageDirectory = storageDirectory;
      this.actionTypes = actionTypes;
    }
  
    getItem(key) {
      return new Promise((resolve, reject) => {
        try {
          let options = {
            path: this.storageDirectory,
            fileName: key
          };
  
          function gotContent(error, fileContent) {
            if (error)reject(error);
            resolve(JSON.parse(fileContent));
          }
  
          buildfire.services.fileManager.readFileAsText(options, gotContent);
        } catch (e) {
          reject(e);
        }
      });
    }
  
    setItem(key, value) {
      return new Promise((resolve, reject) => {
        try {
          let options = {
            path: this.storageDirectory,
            fileName: key,
            content: value
          };
  
          function fileWritten(error, flag) {
            if (error)reject(error);
            resolve(JSON.parse(flag));
          }
  
          buildfire.services.fileManager.writeFileAsText(options, fileWritten);
        } catch (e) {
          reject(e);
        }
      });
    }
  
    removeItem(key) {
      return new Promise((resolve, reject) => {
        try {
          let options = {
            path: this.storageDirectory,
            fileName: key
          };
  
          function fileDeleted(error, successFlag) {
            if (error)reject(error);
            resolve(JSON.parse(successFlag));
          }
  
          buildfire.services.fileManager.deleteFile(options, fileDeleted);
        } catch (e) {
          reject(e);
        }
      });
    }
  
    getAllKeys() {
      return new Promise((resolve, reject) => {
        try {
          return this.actionTypes;
        } catch (e) {
          reject(e);
        }
      });
    }
  }
  
