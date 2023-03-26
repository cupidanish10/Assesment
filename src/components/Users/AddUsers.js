import React from "react";
import Card from "../UI/Card";
import useForm from "../hook/useForm";

const AddUsers = (props) => {

  const [userInput, handleInput, validateForm, formError] = useForm();


  const handleForm = (e)=> {
    e.preventDefault();
    let formStatus = validateForm();

    // console.log(formStatus)

    if ( formStatus) {
      let newUser = userInput;
     
      // lifting state up
      props.onUserList(newUser);
    }

    console.log("handle input", userInput)

  }

  return (
    <form onSubmit={handleForm}>
      <Card title="Basic Information">
        <div className="row">
          <div className="col-md-5">
            <div className="input-group mb-3">
              <select id="inputSalutaion" className="form-select" name="salutation" onChange={handleInput}>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
              </select>

              <input type="text" className="form-control" placeholder="First Name" name="fname" onChange={handleInput} />
             
            </div>
              <div className="text-danger">
              {formError.fname}
              </div>

          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Last Name" name="lname" onChange={handleInput}/>
            <div className="text-danger">
              {formError.lname}
              </div>
          </div>

          <div className="col-md-3">
      
            <select id="inputGenger" className="form-select" name="gender" onChange={handleInput}>
              <option> Gender </option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            <div className="text-danger">
              {formError.gender}
              </div>
          </div>

          <div className="col-md-2">
            <input type="text" className="form-control" placeholder="Age" name="age" onChange={handleInput}/>
            <div className="text-danger">
              {formError.age}
              </div>
          </div>

          <div className="col-md-4">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">(DOB)AD</span>
              <input type="date" className="form-control"  name="dobad"  onChange={handleInput}/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon2">(DOB)BS</span>
              <input type="date" className="form-control"  name="dobbs"  onChange={handleInput}/>
            </div>
          </div>
        
        </div>

       
      </Card>
      <Card title="Contact Address">
        <div className="row">
        <div className="col-md-4">
            <div className="mb-3">
              <select id="inputCountry" className="form-select" name="country" onChange={handleInput}>
                <option value="nepal">Nepal</option>
                <option value="India">India</option>
                <option value="China">China</option>
              </select>

              
             
            </div>
             

          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Address" name="address" onChange={handleInput}/>
            
          </div>

        
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Citizenship Number" name="citizenship" onChange={handleInput}/>
            
          </div>
        
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Mobile Number" name="mobile" onChange={handleInput}/>
            <div className="text-danger">
              {formError.mobile}
              </div>
          </div>
        
        </div>

      </Card>
        <div className="row mt-3 mb-3">
            <div className="col-md-12">
                <button className="btn btn-primary"> Add Patient</button>
            </div>
        </div>
    </form>


  );
};

export default AddUsers;
