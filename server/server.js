// const express = require("express");
// const bodyParser = require("body-parser");
// const users = require("./routes/api/v1/users");
// const profiles = require("./routes/api/v1/profiles");
// const platforms = require("./routes/api/v1/platforms");
// const actions = require("./routes/api/v1/actions");
// var app = express();

// app.use(cors());

// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   })
// );

// app.use(bodyParser.json());
// app.use("/api/v1/", users);
// app.use("/api/v1/", profiles);
// app.use("/api/v1/", platforms);
// app.use("/api/v1/", actions);

// const port = 5000; // process.env.port is Heroku's port if you choose to deploy the app there
// app.listen(port, () => console.log(`Server up and running on port ${port} !`));

const express = require("express");
const cors = require("cors");
const app = express();
const IPFS = require("ipfs");
const orbitdb = require("orbit-db");
const port = 5000;

const ipfs = new IPFS();

ipfs.on("ready", async () => {
  const db = await orbitdb.open(
    "/orbitdb/zdpuAmGNYzcYc4NXCcWFAv7LC7Wnm5QqdRdZ6iwst1dZHdf9Q/itc-db"
  );
  console.log(db);
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
