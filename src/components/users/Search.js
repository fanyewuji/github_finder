import React, { useState, useContext } from 'react';
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const {users, clearUsers} = githubContext;

    const [text, setText] = useState('');

    const onChangeSearch = (event) => {
        setText(event.target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '') {
            alertContext.setAlert(' No information has been entered', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }
    
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input 
                    type="text" 
                    name="text" 
                    placeholder="Search Users..." 
                    value={text}
                    onChange={onChangeSearch}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {users.length > 0 &&
            <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
            }
        </div>
    )
}


export default Search
