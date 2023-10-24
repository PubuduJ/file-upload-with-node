const productModel = (sequelize, DataType) => {
    return sequelize.define("product", {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING(100),
            allowNull: false,
            unique: true,
            field: "name",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Name cannot be empty"
                },
                notNull: {
                    args: true,
                    msg: "Name cannot be null"
                },
                is: {
                    args: /^[A-Za-z][A-Za-z ]+$/,
                    msg: "Invalid name format"
                }
            }
        },
        price: {
            type: DataType.DECIMAL(10,2),
            allowNull: false,
            field: "price",
            validate: {
                notNull: {
                    args: true,
                    msg: "Price cannot be null"
                },
            }
        },
        image: {
            type: DataType.STRING(255),
            allowNull: false,
            field: "image",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "image cannot be empty"
                },
                notNull: {
                    args: true,
                    msg: "image cannot be null"
                }
            }
        },
    },{
        tableName: 'product',
        timestamps: false
    })
}

module.exports = productModel;