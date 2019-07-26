const axios = require("axios");
const _ = require("lodash");
const R = require("ramda");

'claire redfield' 
  |> name => name[0].toUpperCase() + name.substring(1)
  |> name => `my name is ${name}`
  |> console.log;

(async () => {
////////////////////////////////////////////////////////////////////////////////
await axios.get("https://us-central1-random-qiita-api-be836.cloudfunctions.net/get")
  |> ({ data }) => data.url
  |> console.log;
////////////////////////////////////////////////////////////////////////////////
})();

(async () => {
////////////////////////////////////////////////////////////////////////////////
"https://us-central1-random-qiita-api-be836.cloudfunctions.net/get"
  |> axios.get |> await
  |> ({ data }) => data.url
  |> console.log;
////////////////////////////////////////////////////////////////////////////////
})();


[1,3,4,4,3,7,4,2,9]
  |> _.chunk(?, 4)
  |> console.log;


(async () => {
////////////////////////////////////////////////////////////////////////////////
[...Array(100)].map(() => axios.get("https://ifconfig.io"))
  |> Promise.all |> await
  |> arr => arr.map(() => console.log("hogeeee"));
////////////////////////////////////////////////////////////////////////////////
})();
