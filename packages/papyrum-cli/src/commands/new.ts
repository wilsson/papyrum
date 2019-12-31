import * as inquirer from 'inquirer';
import * as validNamePackageJson from 'validate-npm-package-name';
import { join, resolve, basename } from 'path';
import { copySync, ensureDirSync } from 'fs-extra';
import { writeFileSync, readFileSync } from 'fs';
import { spawn, execSync } from 'child_process';
import chalk from 'chalk';

const targets = {
  basic: {
    templateDir: join(__dirname, '../templates/basic')
  },
  typescript: {
    templateDir: join(__dirname, '../templates/typescript')
  }
};

const questionInquirer = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project'
  }
];

const listInquirer = [
  {
    type: 'list',
    name: 'template',
    message: 'Select a template',
    choices: Object.keys(targets)
  }
];

const hasYarn = (): boolean => {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch(e) {
    return false;
  }
};

const createPackageJson = (name: string, templateDir: string, root: string): void => {
  const templatepackage = join(templateDir, 'package.json');
  let json = {};
  let packageJson = JSON.parse(readFileSync(templatepackage, 'utf-8'));

  json = {
    name,
    ...packageJson
  };

  writeFileSync(join(root, 'package.json'), JSON.stringify(json, null, 2));
};

const installDependencies = (name: string): void => {
  let command = 'npm';
  const useYarn = hasYarn();

  if(useYarn) {
    command = 'yarn';
  }

  let config = { 
    stdio: 'inherit',
    shell: true
  };

  console.log('');
  console.log('Installing packages for your application');
  const child = spawn(command, ['install'], config as any);
  child.on('close', () => {
    console.log('');
    console.log(`Project ${chalk.green(name)} created!`);
    console.log(`use: cd ${chalk.green(name)} and ${useYarn ? chalk.green('yarn dev'): chalk.green('npm run dev')}`);
    console.log('');
  });
};

const validationAppName = (appName: string): void => {
  let results = validNamePackageJson(appName);

  let dependency = ['react', 'react-dom', 'styled-components'];
  if(!results.validForNewPackages){
    console.error(`Could not create project named: ${chalk.red(appName)}`);
    console.log('please correct:');

    results.errors && results.errors.forEach(error => {
      console.log(`    ${chalk.red('*')} ${error}`);
    });

    results.warnings && results.warnings.forEach(error => {
      console.log(`    ${chalk.red('*')} ${error}`);
    });
    process.exit();
  }
  if(dependency.includes(appName)){
    console.error(`Could not create project named ${chalk.red(appName)}.`);
    console.error('Please change the name of the application, a dependency has the same name.');
    process.exit();
  }
}

export const newProject = async (argv): Promise<void> => {
  let [ command, paramName, paramTemplate ] = argv;

  if(!paramName && !paramTemplate) {
    const { name } = await inquirer.prompt(questionInquirer);
    const { template } = await inquirer.prompt(listInquirer);

    paramName = name;
    paramTemplate = template;
  }

  if(!paramTemplate) {
    const { template } = await inquirer.prompt(listInquirer);
    paramTemplate = template;
  }

  if(!Object.keys(targets).includes(paramTemplate)) {
    console.log(`Template not found, use: ${chalk.green(Object.keys(targets).join(' | '))}`);
    process.exit();
  }

  const root = resolve(paramName);
  const appName = basename(root);
  validationAppName(appName);
  const { templateDir } = targets[paramTemplate];
  ensureDirSync(root);
  process.chdir(root);
  copySync(templateDir, root);
  createPackageJson(appName, templateDir, root);
  installDependencies(appName);
};