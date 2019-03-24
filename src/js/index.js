import Path from 'path';
// eslint-disable-next-line no-undef
const requireFunc = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : require;
const baseModule = requireFunc.main.children.find(module => module.id.includes('gen-cmake/dist/cmake.min.js'));
let basePath;

if (!baseModule) {
    basePath = '.';
} else {
    basePath = Path.dirname(Path.dirname(baseModule.id));
}

basePath = Path.relative(process.cwd(), basePath) || '.';

const options = {
    // eslint-disable-next-line no-undef
    version: app.version,
    map: [`${basePath}/templates/map.json`],
    extension: [`${basePath}/templates/extensions`]
};

export default options;
