import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    //(item: string) => void
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    // let items = [
    //     'Bien Hoa',
    //     'Sai Gon',
    //     'Lam Dong',
    //     'Binh Dinh'
    // ];

    // let selectedIndex = 0;

    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    heading = "";

    //Event handler
    // const handleClick = (event: MouseEvent) => console.log(event)

    // items = [];

    // const getMessage = () =>{
    //     items.length === 0 ? <p>No items to find</p> : null;
    // }

    // if(items.length == 0){
    //     return (
    //         <>
    //             <h1>List</h1>
    //             <p>No items to find</p>
    //         </>
    //     );
    // }

    return (
        <>
            <h1>{heading}</h1>
            {/* {items.length === 0 ? <p>No items to find</p> : null} */}
            {items.length === 0 && <p>No items to find</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul >
        </>
    );
}
export default ListGroup;