const inquirer = require('inquirer');
const { spawn } = require('child_process')


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

//   npm run release  -- --release-as  $argument
//   npm run changelog
//   git push --follow-tags origin master

//   git add -A
//   git commit -m 'docs: [build] changelog'
//   git push
const execCmd = async (cmd) => {
    const cmds = cmd.split(' ');
    const ls = spawn(cmds[0], cmds.slice(1));

    ls.stdout.pipe(process.stdout);
    ls.stdin.pipe(process.stdin);
    ls.stderr.pipe(process.stderr);

    return new Promise((resolve, reject) => {
      ls.on('close', (code) => {
          if (code === 0) {
              resolve()
              return;
          }
          reject('Error');
      });
    })
}
const main = async () => {
    const version = await getVersion();
    console.log(`\nReleasing ${version} ...\n`);
    await execCmd(`npm run release  -- --release-as  ${version}`);
    await execCmd('npm run changelog');
    await execCmd('git push --follow-tags origin master');

    await execCmd('git add -A');
    await execCmd('git commit -m \'docs: [build] changelog\'');
    await execCmd('git push');
}
main()