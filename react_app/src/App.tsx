// import Message from "./Message"
// import Alert from "./components/Alert";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

// import ListGroup from "./components/ListGroup"
function App() {
  // let items = [
  //   'Bien Hoa',
  //   'Sai Gon',
  //   'Lam Dong',
  //   'Binh Dinh'
  // ];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <ListGroup items={items} heading="Thanh Pho" onSelectItem={handleSelectItem}/> */}
      {/* <Alert>Hello <span>World</span></Alert> */}
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button color='primary' onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>);
}

export default App;