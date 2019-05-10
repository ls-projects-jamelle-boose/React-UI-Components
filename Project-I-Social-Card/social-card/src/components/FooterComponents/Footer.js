import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="Footer">
      <a href="https://www.facebook.com/react/posts/1837015896376809"><FontAwesomeIcon icon={['far', 'comment']} flip="horizontal"/></a>
      <a href="https://google.com"><FontAwesomeIcon icon="retweet" /><span> </span>{Math.floor(Math.random() * 10)}</a>
      <a href="https://loripsum.net/"><FontAwesomeIcon icon={['far', 'heart']} /><span> </span>{Math.floor(Math.random() * 10)}</a>
      <a href="https://reddit.net/"><FontAwesomeIcon icon={['far', 'envelope']} /></a> 
    </div>
  )
}

export default Footer

/* Math.floor(Math.random() * 10) */