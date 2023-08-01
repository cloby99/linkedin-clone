import React from 'react'
import './Widegts.css'
import InfoIcon from '@mui/icons-material/Info'; 
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; 


function Widgets() {

  const newsArticle = (heading, subtitle) => (

    <div className="widgets__aritcle">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>

  );

  return (
    <div className='widgets'>
        <div className="widegts__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
      {newsArticle("Hybrid work is changing views and values around friendships on the job.", "Top news - 42,800 votes")}
      {newsArticle("How do you extend empathy in the workplace?", "Top news - 41,130 readers")}
      {newsArticle("If you stopped to think about it, what do you really want?", "Top news - 23,230 readers")}
      {newsArticle("About 5.5 million Americans work with family members, and it comes with its rewards and challenges.", "Top news - 78,200 readers")}
      {newsArticle("We're #hiring for Software Architect! Apply today or share this post with your network. ", "Find job")}
      {newsArticle("Why are some firms against WFH? ", "Top news - 12,230 readers")}

    </div>
  )
}

export default Widgets