import React from "react";
import { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
import SendIcon from '@material-ui/icons/Send';

function ChatScreen() {

  const [input,setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: "Janvi",
      image:
        "https://m.economictimes.com/thumb/msid-65809826,width-640,height-480,resizemode-4,imgsize-167659/janhvikapoor.jpg",
      message: "Hey",
    },

    {
      name: "Megan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8pE3pqwf9J9QNFSwQMumYEl1r8GPkyW5SQ&usqp=CAU",
      message: "How are you",
    },
    {
      name:"Scarlett",
      image:"https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg",
      message:"I love you"
    }
  ]);
   

 







  const handleClick = (e) => {

    e.preventDefault()
    setMessages([...messages,{message: input}]);
    setInput('');
  }



  return (
    <div classname="chatscreen">
    

      {messages.map((message) =>
        message.name ? (
          <div className="chatscreen__message">
            <Avatar
              className="chatscreen__images"
              src={message.image}
              alt={message.name}
            />
            <p className="chatscreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatscreen__message">
            <p className="chatscreen__textuser">{message.message}</p>
          </div>
        )
      )}
      


       <form className="chatscreen__ip">
           <input className="chatscreen__ipfeild" placeholder="Type your message" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>

           <button onClick={handleClick} className="btn">
               <SendIcon />
           </button>
       </form>


    </div>



   
  );
}

export default ChatScreen;
