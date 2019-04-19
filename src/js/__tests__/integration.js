import { execSync } from 'child_process';

describe('# integration test', () => {
    beforeEach(() => {
        execSync('rm -rf testoutput');
    });

    it('## should print help options', () => {
        let output = execSync('npm run build').toString();
        output = execSync('sgen -g `pwd`/dist/cmake.min.js -h').toString();
        expect(output).toMatchSnapshot();
    });

    it('## should generate design and run cmake commands', () => {
        let output = execSync('npm run build').toString();
        output = execSync('sgen -g `pwd`/dist/cmake.min.js -d src/test/fixture/design.json -o testoutput').toString();
        output = output.replace(/info: Loaded generator .*cmake.min.js.*/, '');
        expect(output).toMatchSnapshot();
        execSync('cmake CMakeLists.txt', { cwd: 'testoutput', stdio: 'inherit' });
        execSync('make', { cwd: 'testoutput', stdio: 'inherit' });
    });
});
