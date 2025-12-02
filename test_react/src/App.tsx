import Test from "./components/FetchApi"
import ComponentTest from "./components/ComponentTest"
import StateTest from "./components/StateTest";
import Child from "./components/StateTest";
import EventClickTest from "./components/EventClickTest";

function App() {
  // const s = { name: "Long", age: 20, email: "long@example.com" };
  return (
    <>
      {/* //Component Test   */}
      {/* Test 1 */}
      {/* <ComponentTest student={s}></ComponentTest> */}
      
      {/* Test 2 */}
      {/* <ComponentTest name="Long" age={20} email="long@example.com" /> */}

      {/* Test 3 */}
      {/* <ComponentTest student={s}></ComponentTest> */}


      {/* //State Test */}
      {/* <StateTest></StateTest> */}

      {/* //State + Prop Test */}
      {/* <Child initial={5}></Child> */}

      <EventClickTest></EventClickTest>
    </>
  )
}

export default App
