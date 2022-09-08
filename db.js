const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let isConnected;

mongoose.set("useUnifiedTopology", true);
mongoose.set("useNewUrlParser", true);

module.exports = connectToDatabase = () => {
  if (isConnected) {
    return Promise.resolve();
  }

  return mongoose
    .connect(
      "mongodb+srv://vickcharles:Vi04261566242@cluster0.spbqo4w.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((db) => {
      isConnected = db.connections[0].readyState;
    });
};
