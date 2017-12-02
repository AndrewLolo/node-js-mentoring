export default function addTimestamp(next) {
  this.lastModifiedDate = new Date();
  next();
}
