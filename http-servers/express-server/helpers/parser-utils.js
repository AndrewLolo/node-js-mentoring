function parseHashMapString(string, recordSplitter, keyValueSplitter) {
  return string.split(recordSplitter)
    .reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split(keyValueSplitter);
      acc[key] = value;
      return acc;
    }, {});
}

export default { parseHashMapString };
