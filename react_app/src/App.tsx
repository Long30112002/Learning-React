// import Message from "./Message"

import Alert from "./components/Alert";

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


  
  return (
    <div>
      {/* <ListGroup items={items} heading="Thanh Pho" onSelectItem={handleSelectItem}/> */}
      <Alert>Hello <span>World</span></Alert>
    </div>);
}

export default App;