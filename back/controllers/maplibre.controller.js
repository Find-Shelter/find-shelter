const axios = require("axios");

exports.query = async (req, res) => {
    try {
        const response = await axios.get(
            "https://nominatim.openstreetmap.org/search",
            {
                params: {
                    q: req.query.query,
                    format: "geojson",
                    polygon_geojson: 1,
                    addressdetails: 1,
                },
            }
        );
        return res.status(200).send(response.data);
    } catch (err) {
        res.status(500).json({
            message: err.message || "Unknown error occurred",
        });
    }
};
