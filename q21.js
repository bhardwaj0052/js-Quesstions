async function fetchChunk(id) {
  return `chunk-${id}`;
}

async function downloadAllSequential(ids) {
  return ids.reduce((promise, id) => {
    return promise.then(async (result) => {
      const chunk = await fetchChunk(id);
      return result + chunk;
    });
  }, Promise.resolve(""));
}

downloadAllSequential([1, 2, 3]).then(console.log);

// "chunk-1chunk-2chunk-3"