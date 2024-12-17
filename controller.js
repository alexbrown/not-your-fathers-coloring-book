const Cloudflare = require("./cloudflare");

module.exports = {
  view: () => {
    res.sendFile(path.join(__dirname, "/index.html"));
  },
  generateImage: async (req, res) => {
    const prompt = `A basic black and white coloring book page for a 7 year old of ${req.body.prompt}`;
    const image = await Cloudflare.generateImage({ prompt });
    return res.status(200).json({
      image,
    });
  },
};
