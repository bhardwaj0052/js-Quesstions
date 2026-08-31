function cartesianProduct(...arrays) {
  return arrays.reduce((acc, cur) => {
    return acc.flatMap(combo =>
      cur.map(value => [...combo, value])
    );
  }, [[]]);
}
console.log(
  cartesianProduct(
    [1, 2],
    ["a", "b"],
    [true, false]
  )
);