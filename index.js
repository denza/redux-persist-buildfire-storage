export default class BuildFireStorage {
    constructor(storageDirectory, actionTypes) {
        this.storageDirectory = storageDirectory;
        this.actionTypes = actionTypes;
    }

    getItem(key) {
        return new Promise((resolve, reject) => {
            try {
                var options = {
                    path:this.storageDirectory
                    ,fileName: key
                }
                
                function gotContent(error, fileContent){
                    if(error)
                        console.error("failed to read file due to ",error);
                    else
                        console.log("File Content: ",fileContent);
                }
                
                buildfire.services.fileManager.readFileAsText(options, gotContent  );
            } catch (e) {
                reject(e)
            }
        })
    }
    setItem(key, value) {
        return new Promise((resolve, reject) => {
            try {
                var options = {
                    path: this.storageDirectory
                    , fileName: key
                    , content: value
                }

                function fileWritten(error) {
                    if (error)
                        console.error("failed to write file due to ", error);
                    else
                        console.log("File Written");
                }

                buildfire.services.fileManager.writeFileAsText(options, fileWritten);
            } catch (e) {
                reject(e)
            }
        })
    }
    removeItem(key) {
        return new Promise((resolve, reject) => {
            try {
                //   this.localStorage.setItem(key, value)
                //   process.nextTick(() => resolve())
            } catch (e) {
                reject(e)
            }
        })
    }
    getAllKeys() {
        return new Promise((resolve, reject) => {
            try {
                return this.actionTypes;
            } catch (e) {
                reject(e)
            }
        })
    }
}