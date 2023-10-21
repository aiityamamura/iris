import { useEffect, useState } from "react";
import './App.css';
import db from './firebase';
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData = [];
      querySnapshot.forEach((doc) => {
        postsData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setPosts(postsData);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {posts.map((post) => (
        <div key={post.id}>
          <table>
            <tr>
          <td>{post.title}</td>
          <td>{post.text}</td></tr></table>
        </div>
      ))}
    </div>
  );
}

export default App;
