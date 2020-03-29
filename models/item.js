/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    base_barter: {
      type: DataTypes.STRING
    },
    base_barter_amount: {
      type: DataTypes.INTEGER
    },
    sold: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 20
      }
    },
    picture: {
      type: DataTypes.STRING,
      defaultValue:
        "https://cdn.clipart.email/4c2ef11c7e671bae0244a859318e1146_trading-clipart-4-clipart-station_1300-1390.jpeg"
    }
  });

  Item.associate = function(models) {
    Item.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
    Item.hasMany(models.Bid, {
      onDelete: "cascade"
    });
  };

  return Item;
};