// const { default: axios } = require("axios");

var axios = require("axios");

async function fetchAssetPrice(productId) {
  try {
    var data = JSON.stringify({
      parameters: {
        Filter: `symbol IN (\"${productId}\")`
      },
    });

    var config = {
      method: "post",
      url: "https://tt471911u1.execute-api.us-east-1.amazonaws.com/v1/0xfd699056bd43b5d6f73dd8a1795b04458f50efe683c0b7788fbfc5c2b8e27ecd",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "65447e9f-349b-45bf-9cfc-fca252d10575",
      },
      data: data,
    };

    const result = await axios(config);

    // console.log("result ", result.data);
    return result?.data?.values?.[0];
  } catch (error) {
    console.log("result error  ", error);

    return null;
  }
}

module.exports = {
  fetchAssetPrice,
};
