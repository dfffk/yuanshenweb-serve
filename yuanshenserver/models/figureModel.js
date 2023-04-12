const mongoose = require("mongoose");
//通过mongoose连接到movies集合
//1 schema模型代码
const figureSchema = new mongoose.Schema(
  {
    //将集合里的数据跟nodejs的数据类型进行关联
    //Number   Array   Boolean
    //Schema 模型默认就会导入_id,所以_id可以不写
    // '_id': mongoose.SchemaTypes.ObjectId,
    name: String,
    //电影集合关联电影类型集合
    imgSrc: String,
    attribute: String,
    alias: String,
    star: Number,
    country: String,
    headerSrc: String,
  },
  {
    //数据库_v，表示版本号，false代表不需要版本号
    versionKey: false,
  }
);
//2 将schema模型对象和集合名称关联起来
mongoose.model("figureModel", figureSchema, "figures");
