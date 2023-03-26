import React,{useState} from 'react';
import '../Users/FileUpload.css';
import Avatar from '../../assets/avatar.jpg';

const FileUpload = ()=> {
    const [data, setData] = useState();

    console.log("file",data)
    return(

       <div className="profile-wrapper">
            <div className="profile-header">

            </div>

            <div className="profile-img">
                <img src={Avatar} className="img-fluid avatar avatar-sm rounded-circle" />
            </div>

            <div className="profile-body">
            <div className="custom-file">
            <span className="btn btn-primary btn-file">
            Select Image <input type="file" onChange={ (e)=>{setData(e.target.files)}}/>
            </span>
                </div>
            </div>
       </div>

       
    )
}

export default FileUpload;

 {/* <div className="main">
            <div className="upload-header">

            </div>
            <div className="uploadimage-body">
                <label htmlFor="imgs"> Upload </label>
            </div>
            <input id="imgs" type="file" accept="image/png, image/jpeg" onChange={(e)=>{setData(e.target.files)}} />
        </div> */}