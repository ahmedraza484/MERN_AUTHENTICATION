import app from "./app.js";
import connectDB from "./src/db/dbConnection.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listening at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
