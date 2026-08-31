function batchProcessor(fn, delayMs) {
  let buffer = [];
  let timer = null;

  return function add(item) {
    buffer.push(item);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(buffer);
      buffer = [];
      timer = null;
    }, delayMs);
  };
}

const add = batchProcessor(items => {
  const total = items.reduce((s, x) => s + x, 0);
  console.log("Flushed batch, total =", total); 
}, 300);

add(1);
add(2);
add(3);