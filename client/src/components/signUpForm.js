import React, { useState } from "react";
import Axios from "axios";

function signUpForm(){
    /*const url = ""
    const [data, setData] = useState({
        email = "",
        name = "",
        nickname = "",
        password = ""
    })
    function handle(e){
onChange={(e)=>handle(e)}
    }*/
    return (
        <div>
            <form>
                <input placeholder="email" type="text"></input>
                <input placeholder="name" type="text"></input>
                <input placeholder="nickname" type="text"></input>
                <input placeholder="password" type="password"></input>
            </form>
        </div>
    );
}

export default signUpForm;