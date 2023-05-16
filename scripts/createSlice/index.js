const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

console.log('layer', layer);
console.log('sliceName', sliceName);
const layers = ['features', 'layers', 'pages'];

if (!layer || !layers.includes(layer)){
    throw new Error(`Укажите слой ${layers.join(' или ')}`)
}

if (!sliceName) {
    throw new Error('Укажите название слайса');
}

createTemplate(layer, sliceName)