import React from 'react';
import ProfilePicture from '../images/profile-picture.png'

export default function Info() {
  return (<div className="info">
    <img className="profile-picture" src={ProfilePicture} alt ="Logo"/>
    <h1 className="name">Sa-Yoor Headley</h1>
    <h3 className="title">Frontend Developer</h3>
    <div class='btn-container'>
    <button class="btn btn-email">Email</button>
    <button class="btn btn-linkedin">LinkedIn</button>
    </div>
  </div>);
}
