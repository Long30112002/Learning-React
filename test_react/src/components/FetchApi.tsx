import { useEffect, useState } from "react";

interface Post {
    userId?: number;
    id?: number;
    title: string;
    body: string;
}

function FetchApi() {
    const [posts, setPosts] = useState<Post[]>([]);

    //GET
    const getPosts = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        // console.log(data);
        setPosts(data);
    };

    //POST
    const addPosts = async () => {
        const newPost: Post = {
            title: "Bài viết mới",
            body: "HAHAHAHAHHAHA"
        };

        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        });

        const data = await res.json();
        console.log("Created", data);

        //Them vao ui (local)
        setPosts([data, ...posts]);

    }

    //PUT
    const updatePosts = async () => {
        const updatedPost: Post = {
            title: "Title đã update",
            body: "Body đã update"
        };

        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPost),
        });

        const data = await res.json();
        console.log("Updated", data);

        //Cập nhật trong UI
        setPosts(posts.map(p => (p.id === 1 ? data : p)));
    };

    //DELETE
    const deletePost = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"
        });

        console.log(res, "Đã xóa");

        //Xóa trong UI
        setPosts(posts.filter(p => p.id !== 1));
    }

    useEffect(() => {
        getPosts();
    }, []);


    return (
        <div>
            <h1>Danh sach bai viet</h1>
            <button onClick={addPosts}>Thêm bài viết </button>
            <button onClick={updatePosts}>Cập nhật bài viết </button>
            <button onClick={deletePost}>Xóa bài viết</button>
            {posts.map(item => (
                <p key={item.id}>Id: {item.id}, Body: {item.body}</p>
            ))};

        </div>
    );
}

export default FetchApi;
