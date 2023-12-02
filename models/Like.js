// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Like extends Model {}

// Like.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       allowNull: false,
//       autoIncrement: true,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'user',
//         key: 'id',
//       },
//     },
//     post_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'post',
//         key: 'id',
//       },
//     },
//     like: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     createdAt: true,
//     underscored: true,
//     modelName: 'likeTable',
//   }
// );

// module.exports = Like;
