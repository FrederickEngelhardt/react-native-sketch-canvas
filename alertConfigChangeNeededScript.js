const chalk = require('chalk');
const packageName = `\nreact-native-sketch-canvas\n`;
const title = `Migration Guide to v1.0.0`;
const link = `https://github.com/ShaMan123/react-native-sketch-canvas/blob/master/README.md#update-metroconfigjs`;
const message = `Follow these instructions to update ` + chalk.blue(`metro.config.js`) + `\nPlease refer to README.md: `;
console.log(chalk.bold.bgYellow.yellow.inverse(packageName));
console.log(chalk.bold.yellow.underline(title));
console.log(chalk.bold(message));
console.log(chalk.bold.magentaBright(link));