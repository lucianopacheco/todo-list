const app = require("./app");
const db = require("./mongoose-db");

db.init();

const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(`app listening on port ${port}`);
});