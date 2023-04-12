//引入对应模型的js
require("./../models/figureModel.js");
const mongoose = require("mongoose");

//添加角色
// async function addFigure(req, res) {
//   //处理数组
//   let { name, imgSrc, attribute } = req.body;
//   let result = await mongoose
//     .model("figureModel")
//     .create({ name, imgSrc, attribute });
//   res.send({ code: 200, data: result });
// }

// //修改角色
// async function updateFigure(req, res) {
//   let { name, attribute } = req.body;
//   //修改数据
//   //将所有的name为大话西游的电影，类型改为喜剧
//   let result = await mongoose
//     .model("figureModel")
//     .updateMany({ name }, { attribute });
//   res.send({ code: 200, data: result });
// }
// //删除角色
// async function deleteFigure(req, res) {
//   let { name } = req.body;
//   //删除name数据
//   let result = await mongoose.model("figureModel").deleteMany({
//     name,
//   });
//   res.send({ code: 200, data: result });
// }
//查找所有角色
async function findFigures(req, res) {
  //同时满足多个条件
  // let result = await mongoose
  //   .model("movieModel")
  //   .find({ name: "大话西游", movieType: "喜剧" });

  //多个条件满足其中之一
  // let result = await mongoose.model("movieModel").find({
  //   $or: [{ name: "大话西游" }, { movieType: "喜剧" }],
  // });

  //模糊查询：查询name中包含西游的所有数据
  // let result = await mongoose.model("movieModel").find({
  //   name: { $regex: "西游", $options: "i" },
  // });

  //多集合关联查询
  let result = await mongoose.model("figureModel").find({});
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.send({ code: 200, data: result });
}
//根据_id查询角色
async function findFigure(req, res) {
  let { _id } = req.body;
  let result = await mongoose.model("figureModel").find({ _id });
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.send({ code: 200, data: result });
}
module.exports = {
  findFigures,
  findFigure,
};
