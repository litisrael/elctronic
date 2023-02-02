import { createTables, getConnection } from "./db.js";

async function main() { 
  const connection = getConnection();
  const DB = await createTables(connection);
  const client = await DB.client.insert({
    ts: "337809114",
    name: "isroe",
    adress: "bla bla",
    tel: "9876545678",
  });
  console.log(client);
  
  const product = await DB.product.insert({
    skdu: "678",
    type_product: "cpu",
    usable: "games ",
    price: 15,
    buyed: new Date(),
    stock: "89",
  });
    
  await DB.clientProduct.insert({
    clientId: client.ts,
    page: client.price,
    buyed: client.createdAt,
    productId: product.skdu,
    product: product.price,
  });

  // const s = await DB.Student.getStudent(student.id)
  // console.log("Student: %j", s);

  // const s2 = await DB.studentCourse.getStudentWithCurses(student.id)
  // console.log("Student with courses: %j", s2);

  //   const s3 = await DB.studentCourse.getStudentWithCursesLazy(student.id);
  //   console.log("Student with courses lazy: %j", s3);
}

main().then(() => {
  console.log("Exiting");
});
main();
