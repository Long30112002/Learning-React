
import * as ListGroup from "../../../../../../react_app/src/components/ListGroup"
import { mockAll, readOutput } from '../../../../../../__lozicode__/mock';

mockAll();

describe("ListGroup.ListGroup", () =>  {
  it("default", async () => {
    const actualOutput = await ListGroup.ListGroup();
    console.log(actualOutput);
    // readOutput('ListGroup/ListGroup/default')
  });
})