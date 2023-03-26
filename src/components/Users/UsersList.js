import Card from "../UI/Card";
import { useState } from 'react';


const UsersList = (props) => {

  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <>
    <form>
    
    <div class="input-group mb-3">
      
      <input type="text" className="form-control" placeholder="Search Patient Name" onChange={(e)=>{setSearchTerm(e.target.value)}} />
    </div>
    
    <Card title="Newly Registered Patients">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Patient ID.</th>
            <th scope="col">Patient Name</th>
            <th scope="col">Age/Sex</th>
            <th scope="col">Mobile Number</th>
          </tr>
        </thead>
        <tbody>

        { props.users.length === 0 && <tr>
            <td colSpan={5}> <p className="text-center"> No Patients Found </p></td>
          </tr>}
         
         {props?.users?.filter((user)=>{
          if (searchTerm == "") {
            return user
          } else if( user.fname.toLowerCase().includes(searchTerm.toLowerCase())) {
            return user
          }
         }).map( (user, index) => {
          return  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <th scope="row">{user.id}</th>
                    <td>{user.salutation} {user.fname} {user.lname}</td>
                    <td>{user.age}/{user.gender}</td>
                    <td>{user.mobile}</td>
                </tr>
         })}
          
        </tbody>
      </table>
    </Card>
  
    </form>
    </>
  );
};

export default UsersList;
