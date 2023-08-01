import React, { useState, useEffect } from 'react'
import "./Feed.css"
import CreateIcon from "@mui/icons-material/Create"
import ImageIcon from "@mui/icons-material/Image"
import SubscriptionsIcon from "@mui/icons-material/Subscriptions"
import EventNoteIcon from "@mui/icons-material/EventNote"
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay"

import { collection, onSnapshot, serverTimestamp, addDoc, query, orderBy } from 'firebase/firestore';
import { db } from './firebase' 

import InputOption from './InputOption';
import Post from './Post';
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move'


function Feed() {

  const user = useSelector(selectUser);

  const[input, setInput] = useState('');
  const[posts, setPosts] = useState([]);

  useEffect(() => {
      // Create a query for the 'posts' collection, order by 'timestamp' in descending order
      const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    
      // Subscribe to the query and update the 'posts' state whenever there's a change
      const unsubscribe = onSnapshot(q, (snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    
      return () => unsubscribe(); // Unsubscribe when the component unmounts
    }, []);

    const sendPost = async (e) => {
      e.preventDefault();
    
      try {
        await addDoc(collection(db, 'posts'), {
          name: user.displayName,
          description: user.email,
          message: input,
          photoUrl: user.photoUrl || "",
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.error('Error adding document: ', error);
      }

      setInput("");
    };


  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form action="">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Start a post'/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9" />
                <InputOption Icon={SubscriptionsIcon} title='Video' color="#7FC15E" />
                <InputOption Icon={EventNoteIcon} title='Event' color="#E7A33E" />
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#FA8072" />
            </div>

        </div>
        <hr className='middle__line'/>
        <br />
        {/* Posts */}
        <FlipMove>
          {posts.map(({ id, data: { name, description, message, photoUrl}}) => (
              <Post
                  key={id}
                  name={name}
                  description={description}
                  message={message}
                  photoUrl={photoUrl}
              />
          ))}
        </FlipMove>
        

    </div>
  )
}

export default Feed