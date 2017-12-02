export default function addTimestamp(next) {
  this.update({}, { $set: { lastModifiedDate: new Date() } });
  next();
}
