const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstChartUpperCase = require('../firstCharUpperCase');

module.exports = async (layer, sliceName) => {
    const componentName = firstChartUpperCase(sliceName);
    const schemaName = `${sliceName}Schema`


    try {
        await fs.writeFile(
            resolveRoot('src', layer, sliceName, 'index.ts'),
            `export { ${componentName}} from './ui/${componentName}/${componentName}';
            export { ${firstChartUpperCase(schemaName)}} from './model/types/${schemaName}';`,
        );
    } catch (e) {
        console.log('Не удалось создать Public api');
    }
}