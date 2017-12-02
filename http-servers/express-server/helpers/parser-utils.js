export default (string, recordSplitter, keyValueSplitter) => string.split(recordSplitter)
  .reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split(keyValueSplitter);
    acc[key] = value;
    return acc;
  }, {});
