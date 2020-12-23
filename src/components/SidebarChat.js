import { Avatar } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import './SidebarChat.css';

export default function SidebarChat({addNewChat}) {
    
    const [seed, setSeed] = useState("");
    
    useEffect(() => {
        // generating random number:
        setSeed(Math.floor(Math.random()*5000));
    }, [])

    const createChat = () =>{
        const roomName = prompt("Please enter a name for chat:");

        if(roomName){
            // do some clever database stuff here
        }
    }

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div className="sidebarChat" onClick={createChat}>
            <h2>Add new chat</h2>
        </div>
    )
}
