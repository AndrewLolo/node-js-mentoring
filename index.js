import config from './config';
import {User, Product} from './models';
import DirWatcher from 'dirwatcher';
import Importer from 'importer';
import Streams from 'streams'

const user = new User();
const product = new Product();
console.log(config.name);
console.log(Streams);