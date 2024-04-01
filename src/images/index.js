const images = require.context('.', true);
const imageList = images.keys().map(image =>  images(image)).filter(img => typeof img == 'string');
export default imageList;