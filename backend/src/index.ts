import app from "./app";
const port = 3000;

require('dotenv').config();

app.listen(port, () => {
  console.log(`server is running in http://localhost:${port}`);
})
