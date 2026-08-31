async function fetchEndpoint(url) {
  return {
    records: [
      { category: "food", value: 10 },
      { category: "tech", value: 20 },
    ],
  };
}

async function asyncPool(limit, items, iteratorFn) {
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

async function buildCategoryReport(urls, concurrency = 3) {
  const responses = await asyncPool(concurrency, urls, fetchEndpoint);
  const records = responses.flatMap((response) => response.records);
  const categoryCounts = records.reduce((acc, record) => {
    acc[record.category] = (acc[record.category] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(categoryCounts)
    .map(([category, count]) => ({
      category,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

buildCategoryReport(["/a", "/b", "/c", "/d", "/e"]).then(console.log);
