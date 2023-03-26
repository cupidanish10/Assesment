import React,{useState} from "react";

const useForm = ()=> {

  const [ userInput, setUserInput] = useState({
    fname: '',
    lname: '',
    age: '',
    mobile: '',
    gender: '',
    country: '',
    address: '',
    citizenship: '',
    dobad: '',
    dobbs: ''
  });


  const [formError, setFormError] = useState({});

  const validateForm = ()=> {
    let err = {}

    if(userInput.fname === '') {
      err.fname = "Firstname Required"
    }
    if(userInput.lname === '') {
      err.lname = "Lastname Required"
    }
    if(userInput.gender === '') {
      err.gender = "Gender Required"
    }
    if(userInput.age === '') {
      err.age = "Age Required"
    }
    if(userInput.mobile === '') {
      err.mobile = " Mobile Number Required"
    }

    setFormError({...err})

    // if err keys value length is more than 1 retrun true else false
    return Object.keys(err).length < 1;
  }

//   return [ userInput, (e)=> {
//     setUserInput( prev=> {
//        return {
//         prev,
//         [e.target.name]: e.target.value
//        }
//     })
//   }]

const handleInput = (e)=> {
  setUserInput( {
    ...userInput,
    [e.target.name]: e.target.value
})
}



  return [ {...userInput, id: Math.floor(Math.random() * 10111)+ 232}, handleInput, validateForm, formError]

}

export default useForm;