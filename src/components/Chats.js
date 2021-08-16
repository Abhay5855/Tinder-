import React from "react";
import "./Chats.css";
import Chat from "./Chat";
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Janvi"
        message="hey"
        timestamp="40 seconds ago"
        profilePic="https://m.economictimes.com/thumb/msid-65809826,width-640,height-480,resizemode-4,imgsize-167659/janhvikapoor.jpg"
      />
      <Chat
        name="Megan Fox"
        message="Kaisa hain"
        timestamp="3 days ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcuZqRnJSnYM0R8H6mG2hWdL4gT4G-96Q_BQ&usqp=CAU"
      />
      <Chat
        name="Sacarlett"
        message="I love You"
        timestamp="2 days ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8pE3pqwf9J9QNFSwQMumYEl1r8GPkyW5SQ&usqp=CAU"
      />
    </div>
  );
}

export default Chats;
