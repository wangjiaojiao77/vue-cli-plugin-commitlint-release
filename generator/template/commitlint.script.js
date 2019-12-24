var inquirer = require('inquirer'); //命令行交互模块
var shell = require('shelljs');

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}

const getVersion = async () => {
    return new Promise((resolve, reject) => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'version',
                choices: ['patch', 'minor', 'major'],
                message: 'please choose argument [major|minor|patch]: '
            }
        ]).then(answer => {
            resolve(answer.version);
        }).catch(err => {
            reject(err);
        });
    })
}

const main = async () => {
    const version = await getVersion();
    shell.echo(`\nReleasing ${version} ...\n`);
    await shell.exec(`npm run release -- --release-as ${version}`);
    await shell.exec('npm run changelog');
    await shell.exec('git push --follow-tags origin master');

    await shell.exec('git add -A');
    await shell.exec(`git commit -m "docs(build): changelog"`);
    await shell.exec('git push');
}

main()
