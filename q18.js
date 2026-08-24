// const { use } = require("react");

function getdata(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User-${id}`});
    }, 3000);
  });
}

async function  loadAllUsers(ids) {
 for(const id of ids){
    const user = await getdata(id);
    console.log(user);
 }
 console.log('All done');
}
const ids = ["u1", "u2", "u3", "u4"];
 loadAllUsersBroken(ids)