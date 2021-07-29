module.exports = (sequelize,DataTypes)=>{
    const products = sequelize.define("products",{
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty : true
            }
        },
        sub_category_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty : true
            }
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty : true
            }
        }
    })

    return products
}