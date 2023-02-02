import { Model, Sequelize, DataTypes } from "sequelize";
export async function createProduct(sequelize) {
  const product = sequelize.define(
    "product",{
      skdu: {
      
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      type_product: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      usable: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      buyed: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      schema: "store",
    }
  );
  await product.sync();
  return {
    Schema: product,
    insert: async (item) => {
      const result = await product.create(item);
      return result.toJSON();
    },
  };
}
