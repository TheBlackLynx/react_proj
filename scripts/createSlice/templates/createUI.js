const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstChartUpperCase = require('../firstCharUpperCase');
const componentTemplate = require('./componentTemplate');
const storyTemplate = require('./StoryTemplate');
const styleTemplate = require('./StyleTemplate');


module.exports = async (layer, sliceName) => {
    const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments);
    const createUIDir = async () => {
        try {
            await fs.mkdir(resolveUIPath());
        } catch (e) {
            console.log('Не удалось создать ui директорию');
        }
    }

    const createComponent = async () => {
        try {
            const componentName = firstChartUpperCase(sliceName);
            await fs.mkdir(resolveUIPath(componentName))
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.tsx`),
                componentTemplate(componentName)
            )
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.stories.tsx`),
                componentTemplate(componentName)
            )
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.module.scss`),
                componentTemplate(componentName)
            )
        } catch (e) {
            console.log('Не удалось создать компонент');
        }
    }

    await createUIDir();
    await createComponent();
}