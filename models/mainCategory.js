module.exports = (sequelize,DataTypes)=>{
    const mainCategory = sequelize.define("mainCategory",{
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
                notEmpty : true
            }
        }
    })

    return mainCategory
}