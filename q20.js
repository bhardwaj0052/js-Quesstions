async function asyncPool(limit, items, iteratorFn) {
  if (limit <= 0) {
    throw new Error("limit must be greater than 0");
  }
  const results = new Array(items.length);
  let nextIndex = 0;
  async function worker() {
    while (true) {
      const index = nextIndex++;
      if (index >= items.length) {
        return;
      }
      results[index] = await iteratorFn(items[index]);
    }
  }
  const workers = Array.from({ length: Math.min(limit, items.length) }, () =>
    worker(),
  );
  await Promise.all(workers);
  return results;
}

const delayLog = (id) =>
  new Promise((res) =>
    setTimeout(() => {
      console.log("done", id);
      res(id * 10);
    }, 500),
  );

asyncPool(2, [1, 2, 3, 4, 5], delayLog).then(console.log);
