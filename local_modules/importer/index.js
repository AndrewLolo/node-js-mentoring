import fs from 'fs';
import path from 'path';
import dataConverter from 'data-converter';
import {promisify} from 'util';
import DirWatcher from 'dirwatcher';

const readFile = promisify(fs.readFile);

export default class Importer{
    constructor() {
        this.dirwatcher = new DirWatcher();
    };

    import(filePath) {
        return readFile(filePath)
            .then(dataConverter.csvToJson)
            .catch((err) => console.error(err));
    }

    importSync(filePath) {
        const fileBuffer = fs.readFileSync(filePath);
        return dataConverter.csvToJson(fileBuffer);
    }

    watchDir(dirPath, delay, callback) {
        this.dirwatcher.watch(dirPath, delay);
        this.dirwatcher.on('changed', (filename) => {
            const filePath = path.join(dirPath, filename);
            this.import(filePath)
                .then(callback);
        });
    }
}