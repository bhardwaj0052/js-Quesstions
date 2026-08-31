async function runWithRetries(tasks, maxRetries = 3) {
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  const promises = tasks.map(async task => {
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await task();
      } catch (error) {
        if (attempt >= maxRetries) {
          throw error;
        }
        const delay = 100 * 2 ** attempt;
        await wait(delay);
      }
    }
  });

  const settled = await Promise.allSettled(promises);
    console.log("promises>>>>",{promises,settled})
  return settled.reduce(
    (result, item) => {
      if (item.status === "fulfilled") {
        result.succeeded.push(item.value);
      } else {
        result.failed.push(item.reason);
      }
      return result;
    },
    {
      succeeded: [],
      failed: []
    }
  );
}
let count = 0;
const flaky = async () => {
  count++;
      console.log('runn1')

  if (count < 2) {
    throw new Error(`flaky failed on attempt ${count}`);
  }
  return "ok";
};

runWithRetries([
  flaky,
  async () =>{
    console.log('runn')
    return "immediate-ok"},
  async () => {
    throw new Error("always fails");
  },
]).then(console.log);