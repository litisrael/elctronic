export async function createTP (client, product)
{
    const sequelize = await getConnection();
    const clientProduct = sequelize.define(
        "client_product",
        {
            schema: "store",
        })
    client.belongsToMany(product, { through: clientProduct });
    product.belongsToMany(client, { through: clientProduct });
    return {
  
        async insert (clientProduct)
        {
            const result = await clientProduct.create(clientProduct);
    
            return result.toJSON();
        }
    }
}