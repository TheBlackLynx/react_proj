import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');

const sharedUiDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedUiDirectory?.getDirectories();
const isAbsolute = (value: string) => {
    const layers = [
        'app',
        'shared',
        'entities',
        'features',
        'widgets',
        'pages',
    ];
    return layers.some((layer) => value.startsWith(layer));
};
componentsDirs?.forEach((dir) => {
    const indexFilePath = `${dir.getPath()}/index.ts`;
    const indexPath = dir.getSourceFile(indexFilePath);
    if (!indexPath) {
        const sourceCode = ` export * from './${dir.getBaseName()}'`;
        const file = dir.createSourceFile(indexFilePath, sourceCode, {
            overwrite: true,
        });
        console.log(files);

        file.save();
    }

    files.forEach((file) => {
        const imports = file.getImportDeclarations();
        imports.forEach((importDeclaration) => {
            const value = importDeclaration.getModuleSpecifierValue();

            const valueWithoutAlias = value.replace('@/', '');

            const segments = valueWithoutAlias.split('/');
            const isSharedLayer = segments?.[0] === 'shared';
            const isUISlice = segments?.[1] === 'ui';
            if (isSharedLayer && isUISlice) {
                // console.log('isSharedLayer', isSharedLayer, 'isUISlice', isUISlice)
            }

            if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUISlice) {
                const result = valueWithoutAlias
                    .split('/')
                    .slice(0, 3)
                    .join('/');
                console.log(result);
                importDeclaration.setModuleSpecifier('@/' + result);
            }
        });
    });
    project.save();
});
