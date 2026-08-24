console.log("start");
[1, 2, 3].forEach(async (n) => {
  await null;
  console.log("forEach", n);
});
[1, 2, 3]
  .map(async (n) => {
    await null;
    return n;
  })
  .forEach((p) => p.then((n) => console.log("map-chain", n)));
console.log("end");
// output
// start
// end
// forEach 1
// forEach 2
// forEach 3
// map-chain 1
// map-chain 2
// map-chain 3
// because start end are synchoronus and other is async and according to callstack event loop the async function and timeout runs after when the synchoronus code executed. and for that time they remain inside microstak queues and macrotask queue
