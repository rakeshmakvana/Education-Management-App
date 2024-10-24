const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const admin = require("./routes/admin.route");
const sclass = require("./routes/sclass.route");
const student = require("./routes/student.route");
const subject = require("./routes/subject.route");
const teacher = require("./routes/teacher.route");
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/", admin);
app.use("/", sclass);
app.use("/", student);
app.use("/", subject);
app.use("/", teacher);

app.listen(process.env.PORT, () => {
  console.log(`Server Starting On http://localhost:${process.env.PORT}`);
  mongoose.connect(process.env.MONGO_URL)
    .then(console.log("MONGODB Connected"))
    .catch((err) => console.log("MONGODB Err"));
});