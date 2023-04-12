var express = require("express");
const router = express.Router();

const {
  findFigures,
  findFigure,
} = require("../controllers/figureController.js");

// router.post("/add", addFigure);

// router.put("/update", updateFigure);

// router.delete("/delete", deleteFigure);

router.get("/find", findFigures);

router.post("/find", findFigure);

module.exports = router;
