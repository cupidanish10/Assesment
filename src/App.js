import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer/Footer';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
import FileUpload from './components/Users/FileUpload';

import './custom.css';


const App = ()=> {

    const [users, setUsers] = useState([]);

    // Getting a stored value from localStorage and loading it into React state
    useEffect(() => {
        const data = window.localStorage.getItem('users');
        if ( data !== null ) setUsers(JSON.parse(data));
      }, []);

    useEffect( ()=> {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const userListHandler = ( getUsers )=> {
        setUsers( [...users, getUsers] );
    }

    
    console.log("stored", users);
    return(
       <section className="wrapper my-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <h4 className="text-center text-primary text-uppercase mb-3"> Registration only </h4>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-9">
                            <AddUsers onUserList={userListHandler}/>

                    </div>

                    <div className="col-md-3">
                        <FileUpload />
                    </div>
                   
                </div>

                <div className="row">
                    <div className="col-md-12">
                    
                    <UsersList users={users}/>

                   
                    </div>
                </div>
               
            </div>

       

       </section>
    )
}

export default App;