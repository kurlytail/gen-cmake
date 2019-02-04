import { execSync } from 'child_process';



describe('# integration test', () => {
    beforeEach(() => {
        execSync('rm -rf testoutput');
    });

    it('## should print help options', () => {
        const output = execSync('./scripts/sgen-cmake.sh -h').toString();
        expect(output).toMatchSnapshot();
    });

    it('## should generate design', () => {
        const output = execSync('./scripts/sgen-cmake.sh -d src/test/fixture/design.js -o testoutput').toString();
        expect(output).toMatchSnapshot();
    });

    it('## should generate design with merge', () => {
        let output = execSync(
            './scripts/sgen-cmake.sh -d src/test/fixture/design.js -o testoutput --overwrite=merge'
        ).toString();
        expect(output).toMatchSnapshot();
        output = execSync(
            './scripts/sgen-cmake.sh -d src/test/fixture/design.js -o testoutput --overwrite=merge'
        ).toString();
        expect(output).toMatchSnapshot();
    });

    it('## should generate design and run cmake commands', () => {
        let output = execSync(
            './scripts/sgen-cmake.sh -d src/test/fixture/design.js -o testoutput --overwrite=merge'
        ).toString();
        expect(output).toMatchSnapshot();
        output = execSync('npm install', { cwd: 'testoutput' }).toString();
        output = execSync('npm run lint', { cwd: 'testoutput' }).toString();
    });
});
