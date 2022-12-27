const express = require("express");
const { fetchAssetPrice } = require("./_helpers/password-service");
const router = express.Router();

// models

// @route       GET /:code
// @description    Redirect to the long/original URL
router.get("/v1/price/:productId", async (req, res) => {
  try {
    //

    const productId = req.params.productId;

    if (!productId) {
      return res
        .status(400)
        .json({ message: "Invalid product id", success: false });
    }

    const price = await fetchAssetPrice(productId);

    if (!price) {
      return res
        .status(400)
        .json({ message: "Failed to fetch price", success: false });
    }
    console.log("result ", price);

    res.status(200).json({ data: price, success: true });
  } catch (err) {
    // exception handler
    console.error(err);
    res.status(500).json({ message: "Server Error", success: false });
  }
});

module.exports = router;
