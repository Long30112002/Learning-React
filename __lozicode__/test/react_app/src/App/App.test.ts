
import * as App from "../../../../../react_app/src/App"
import { mockAll, readOutput } from '../../../../../__lozicode__/mock';

mockAll();

describe("App.App", () =>  {
  it("default", async () => {
    const actualOutput = await App.App();
    console.log(actualOutput);
    // readOutput('App/App/default')
  });
})