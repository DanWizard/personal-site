const IPFS = require("ipfs");
const orbitdb = require("orbit-db");

const ipfs = new IPFS();

ipfs.on("ready", async () => {
  const db = await orbitdb.open(
    "/orbitdb/zdpuAmGNYzcYc4NXCcWFAv7LC7Wnm5QqdRdZ6iwst1dZHdf9Q/itc-db"
  );
  console.log(db);
});

module.exp;
