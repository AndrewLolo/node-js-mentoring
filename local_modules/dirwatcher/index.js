import EventEmitter from 'events';
import fs from 'fs';

const DEFAULT_DELAY = 500;

export default class DirWatcher extends EventEmitter{
    constructor() {
        super();
        this.on('error', (error) => console.error(error));
    }

    watch(path, delay = DEFAULT_DELAY) {
        try {
            this.dirChangeWatcher = fs.watch(path, {recursive: true});
            this.dirChangeWatcher.on('change', (eventType, filename) => this.onChangeCallback(filename, delay));
        } catch (err) {
            this.emit('error', err);
        }
    };

    onChangeCallback(filename, delay) {
        setTimeout(() => this.emit('changed', filename), delay)
    }

    unwatch() {
        if (this.dirChangeWatcher) {
            this.dirChangeWatcher.close();            
        }
    }
}