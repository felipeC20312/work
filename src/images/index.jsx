const requireContext = require.context('./imgs/', true, /\.(png|jpe?g|gif)$/);

const images = {};

requireContext.keys().forEach(fileName => {
  const image = requireContext(fileName);
  const imageName = fileName.replace(/^\.\/(.*)\.(png|jpe?g|gif)$/, '$1');
  images[imageName] = image.default;
});

export default images;