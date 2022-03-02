module.exports = (app) => {
    const maplibre = require("../controllers/maplibre.controller.js");
    var router = require("express").Router();

    router.get("/", maplibre.query);

    app.use("/api/maplibre", router);
};
