import { Sequelize, DataTypes, Model } from "sequelize";
export async function createClient (sequelize)
{
  const client = sequelize.define(
    "clients",
    {
      ts: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      schema: "store",
    }
  );
  return {
    Schema: client,
    insert: async (item) => {
      const result = await client.create(item);
      return result.toJSON();
    },
  };
}