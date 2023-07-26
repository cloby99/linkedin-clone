import React, { useState } from 'react'
import "./Feed.css"
import CreateIcon from "@mui/icons-material/Create"
import ImageIcon from "@mui/icons-material/Image"
import SubscriptionsIcon from "@mui/icons-material/Subscriptions"
import EventNoteIcon from "@mui/icons-material/EventNote"
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay"



import InputOption from './InputOption';
import Post from './Post';


function Feed() {
    const [posts, setPosts] = useState([])

    const sendPost = e => {

    }


  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form action="">
                    <input type="text" placeholder='Start a post'/>
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
        {/* Posts */}
        {posts.map((post) => (
            <Post />
        ))
        }

        <Post name='Anu 99' description='This is a test' message='meow meow'/>


    </div>
  )
}

export default Feed