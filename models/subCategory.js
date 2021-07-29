module.exports = (sequelize,DataTypes)=>{
    const subCategory = sequelize.define("subCategory",{
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
            primaryKey:true,
            validate: {
                notEmpty : true
            }
        }
    })

    return subCategory
}