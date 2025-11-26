import * as App from "../react_app/src/App";
import { mock, init } from './core';
import * as fse from 'fs-extra';


export function mockAll() {
  mock(App, {
    functionName: 'App', targetName: 'App'
  });

  
  init();
}

export function readOutput(path) {
  const outputPath = `output/${path}`;
  if(fse.existsSync(`${outputPath}.html`)) {
    return fse.readFileSync(`${outputPath}.html`);
  }
  if(fse.existsSync(`${outputPath}.json`)) {
    return fse.readJsonSync(`${outputPath}.json`);
  }
}

