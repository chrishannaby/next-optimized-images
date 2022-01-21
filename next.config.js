const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      optimizeImagesInDev: true,
      images: {
        loader: "custom",
        disableStaticImages: true,
      },
    },
  ],
  {
    webpack5: true,
  },
]);
