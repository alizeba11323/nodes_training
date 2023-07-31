const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://127.0.0.1:27017/";
const myClient = new MongoClient(url);

// const ConnectDb = async () => {
//   try {
//     const client = await myClient.connect();
//     const db = client.db("mydb");
//     console.log("DB Connected...");
//     await db.createCollection("users");
//     console.log("collection created");
//   } catch (err) {
//     console.log(err);
//   }
// };

// ConnectDb().catch((err) => console.log(err));

// const InsertDocument = async () => {
//   try {
//     const client = await myClient.connect();
//     const db = client.db("mydb");
//     console.log("DB Connected...");
//     const res = await db
//       .collection("users")
//       .insertOne({ name: "Name One", age: 26, gender: "Female" });
//     console.log("Data Inserted...");
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };
// InsertDocument().catch((err) => console.log(err));

// const InsertMultipleValue = async () => {
//   try {
//     const client = await myClient.connect();
//     const db = client.db("mydb");
//     const res = await db.collection("users").insertMany([
//       { name: "Name 2", age: 20, gender: "Male" },
//       { name: "Name3", age: 30, gender: "Famale" },
//     ]);
//     console.log("Multiple value inserted...");
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };
// InsertMultipleValue().catch((err) => console.log(err));
//
// 1.find() document array all document
// 2.findOne  one document
// const FindAllUsers = async () => {
//   try {
//     const client = await myClient.connect();
//     const db = client.db("mydb");
//     console.log("db Connected..");
//     const res = await db
//       .collection("users")
//       .find({ age: 26, name: "Name One" })
//       .toArray(); //all document
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };
// FindAllUsers().catch((err) => console.log(err));

// const FindSingleUser = async () => {
//   try {
//     const client = await myClient.connect();
//     const db = client.db("mydb");
//     const res = await db.collection("users").findOne({ age: 30 });
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };
// FindSingleUser().catch((err) => console.log(err));

// const sortData = async () => {
//   try {
//     const client = await myClient.connect();
//     const db = client.db("mydb");
//     console.log("DB Connected...");
//     const res = await db
//       .collection("users")
//       .find({})
//       .sort({ gender: 1 })
//       .toArray();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     await myClient.close();
//   }
// };
// sortData().catch((err) => console.log(err));

// deleteOne method
// deleteOne({age: 30})
// const deleteSingle = async () => {
//   try {
//     const client = await myClient.connect();
//     const db = client.db("mydb");
//     console.log("DB Connected...");
//     const res = await db.collection("users").deleteOne({ age: 30 });
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }finally{
//     myClient.close();
//   }
// };
// deleteSingle().catch((err) => console.log(err));
// deleteMany == delete multiple records

// const DeleteMultiple = async () => {
//   try {
//     const client = await myClient.connect();
//     const db = client.db("mydb");
//     const res = await db.collection("users").deleteMany({ gender: "Female" });
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     myClient.close();
//   }
// };

// DeleteMultiple().catch((err) => console.log(err));

const dropCollection = async () => {
  try {
    const client = await myClient.connect();
    const db = client.db("mydb");
    console.log("db conneceted");
    const res = await db.collection("users").drop();
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    myClient.close();
  }
};
dropCollection().catch((err) => console.log(err));

// const upDateDocument = async () => {
//   try {
//     const client = await myClient.connect();
//     const db = client.db("mydb");
//     const res = await db
//       .collection("users")
//       .findOneAndUpdate(
//         { age: 20 },
//         { $set: { name: "New Updated Name 2", age: 21 } }
//       );
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };
// upDateDocument().catch((err) => console.log(err));
