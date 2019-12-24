module.exports = (api) => {
  api.render("./template")
  
	api.extendPackage({
		scripts: {
			"release": "standard-version",
			"commit": "npx git-cz",
			"changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0",
			"push": "node commitlint.script.js",
			"preinstall": "rm -rf node_modules",
			"postinstall": "./node_modules/.bin/commitizen init cz-conventional-changelog --save --save-exact --force"
		},
		config: {
			"commitizen": {
				"path": "./node_modules/cz-conventional-changelog"
			}
		},
		husky: {
			"hooks": {
				"commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
			}
		},
		devDependencies: {
			"@commitlint/cli": "^8.2.0",
			"@commitlint/config-conventional": "^8.2.0",
			"commitizen": "^4.0.3",
			"conventional-changelog": "^3.1.18",
			"conventional-changelog-cli": "^2.0.31",
			"cz-conventional-changelog": "^3.0.2",
			"husky": "^3.1.0",
			"standard-version": "^7.0.1"
		},
		"dependencies": {
			"inquirer": "^7.0.1",
			"shelljs": "^0.8.3"
		},
  })
}