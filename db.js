import { Sequelize, Model, DataTypes } from "sequelize";
import { createClient } from "./clients.js";
import { createProduct } from "./products.js";
import { createTP } from "./clientsproduct.js";
export const getConnection = async () => {
  const sequelize = new Sequelize({
    database: "strore_elctronic",
    username: "business_owner",
    port: 5432,
    password: "01456",
    host: "localhost",
    dialect: "postgres",
  });
   return sequelize;
};

export async function createTables(sequelize) {
  
  const connection = await getConnection();

  // Se crea la tabla "Student".
  const client = await createClient(connection);
  // Se crea la tabla "Course".
  const product = await createProduct(connection);

  // Se crea la tabla "studentCourse"
  // con las relaciones entre las tablas "Course" y "Student".
  const clientProduct = await createTP(
    connection,
    client.Schema,
    product.Schema
  );

  // Se devuelven objetos con las tablas "Student", "Course" y "studentCourse".
  return {
    client,
    product,
    clientProduct,
  };
}
