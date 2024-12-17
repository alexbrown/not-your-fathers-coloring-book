const axios = require("axios");
const fs = require("fs");
const { v4 } = require("uuid");

module.exports = {
  generateImage: async (prompt) => {
    return new Promise(async (resolve, reject) => {
      const response = await axios.post(
        `${process.env.CLOUDFLARE_API_URL}${process.env.STABLE_DIFFUSION_PATH}`,
        prompt,
        {
          headers: {
            Authorization: `Bearer ${process.env.CLOUDFLARE_TOKEN}`,
          },
        },
      );

      const fileName = `public/images/${v4()}.png`;
      fs.writeFile(fileName, response.data, (res) => {
        resolve(fileName);
      });
    });
  },
};
