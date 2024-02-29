import React from "react";
import Noteblock from "../components/Noteblock";
import { Link } from "react-router-dom";

const Menu = () => {
    const usernotes = [
        {id:1, title: "Teste1"}, 
        {id:2, title:"Moby Dick"}, 
        {id:3, title:"draft"}, 
        {id:4, title:"lista de afazeres"}, 
        {id:5, title:"importante"},
        {id:6, title:"note_test"},
        {id:7, title:"aaaaaa"},
        {id:8, title:"aaababababbaa"},
    ];//Get notes id from api

    return(
        <>
            <div className="">
                <div className="grid grid-cols-6 gap-2">
                    {
                    usernotes.map((note) => (<Link to={`/editor/${note.id}`}><Noteblock noteid={note.id} title={note.title}/></Link>))
                    }
                </div>
            </div>

        </>
    );
}

export default Menu;