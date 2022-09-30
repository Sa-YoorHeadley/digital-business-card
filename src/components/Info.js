import React from 'react';
import ProfilePicture from '../images/profile-picture.jpg'

export default function Info() {
  return (
  <div className="info">
    <img className="profile-picture" src={ProfilePicture} alt ="Logo"/>
    <h1 className="name">Sa-Yoor Headley</h1>
    <h3 className="title">Frontend Developer</h3>
    <div class='btn-container'>
    <a href='mailto:sai.h152015@gmail.com' class="btn btn-email">Email</a>
    <a href='https://www.linkedin.com/in/sa-yoor-headley/' class="btn btn-linkedin">LinkedIn</a>
    </div>
  </div>);
}
