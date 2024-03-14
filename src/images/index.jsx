const requireContext = require.context('./imgs/', true, /\.(png|jpe?g|gif|svg)$/);

const images = {};

requireContext.keys().forEach(fileName => {
  const image = requireContext(fileName);
  const imageName = fileName.replace(/^\.\/(.*)\.(png|jpe?g|gif|svg)$/, '$1');
  images[imageName] = image.default;
});

export default images;