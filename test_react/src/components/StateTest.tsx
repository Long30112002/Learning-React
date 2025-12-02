import { useEffect, useState } from 'react'

// function StateTest() {
//   // const [user, setUser] = useState({ name: "Long", age: 20 });
//   const [user, setUsers] = useState([
//     { name: "Long", age: 20 },
//     { name: "Lan", age: 22 },
//     { name: "Huy", age: 25 },
//     { name: "Mai", age: 21 },
//   ]);
//   useEffect(() => {
//     // setUsers({ ...user, age 21}); // update tuổi, giữ tên
//     // setUsers({ ...user});
//     // setUsers([...user, { name: "Long", age: 20 }]);
//     setUsers([...user.filter(u => u.name === "Long")]);
//   }, []);

//   console.log(user);
//   return (
//     <div>
//       <p></p>
//     </div>
//   )
// }

// interface User { 
//   id?: number; 
//   name: string; 
//   email: string; 
//   age: number; } function StateTest() {
//   const [posts, setPost] = useState<User[]>([]);

//   const getPosts = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     setPost(data.map((user: User) => ({ ...user, age: 21 }))]);

//   }
//   useEffect(() => { // setUser({ ...user, age: 21 }); // update tuổi, giữ tên 
//     getPosts();
//   }, []);
//   return (
//     <div>
//       <ul>
//         {posts.map(user => (
//           <p key={user.id}>Name: {user.name}, Email: {user.email}, Age: {user.age}</p>
//         ))}
//       </ul>
//     </div>)
// }


function Child({initial} : {initial: number}){
  const [count, setCount] = useState(initial);


  return (
    <>
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
    </>
  )
}

export default Child;
