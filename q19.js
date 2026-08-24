function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User-${id}`});
    }, 3000);
  });
}
// async function loadAllUsersBroken(ids) {
//  const results = [];
//  ids.forEach(async (id) => {
//  const user = await fetchUser(id);
//  results.push(user); // order not guaranteed, and caller can't await this
//  });
//  return results; // BUG: returns [] immediately
// }
// TODO: rewrite using Promise.all + map

async function loadallusersbroken(ids) {
    const users = ids.map((id)=>fetchUser(id));
    const data = await Promise.all(users);
    return data;
    
}
const ids = ["u1", "u2", "u3", "u4"];
loadallusersbroken(ids).then(console.log);