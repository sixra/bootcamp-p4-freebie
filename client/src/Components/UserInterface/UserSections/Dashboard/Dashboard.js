import React, {useState, useEffect} from "react";
import axios from "axios"
import {useSelector, useDispatch} from "react-redux"
import { updateUser } from "../../../../Redux/Actions/AuthAction"
import UserNavBar from "../../UserNavBar/UserNavBar";
import PathBanner from "../../../PathBanner/PathBanner";
import "../../UserInterface.scss"
import "./Dashboard.scss"
import { FcOldTimeCamera } from "react-icons/fc";
import toastr from "toastr";
import { useHistory } from 'react-router-dom';

const initialState = {
  firstName: "",
  lastName: "",
  avatar:""
}

const Dashboard = () => {
  const auth = useSelector(state => state?.auth)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [data, setData] = useState(initialState)
  const {firstName, lastName, password, cf_password} = data
  const [avatar, setAvatar] = useState(false)
  const [loading, setLoading] = useState(false)
  // const [callback, setCallback] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();
  const token = user?.token;
  const hash = user?.result._id;

console.log(auth)

  const handleChange = e => {
    setData({...data, [e.target.name]: e.target.value})
}




const changeAvatar = async(e) => {
  e.preventDefault()
  try {
      const file = e.target.files[0]
      if(!file) {
      return setData({...data, err: "No files were uploaded." , success: ''})
      }else if(file.size > 1024 * 1024){
        toastr["error"]("Please make sure the file size is 1024 * 1024!", "Size too large!")
        setData({...data, err: "Size too large." , success: ''})
      }else if(file.type !== 'image/jpeg' && file.type !== 'image/png'){
        toastr["error"]("We do not support this file format, make sure it is jpeg or png format!", "Wrong Format!")
        setData({...data, err: "File format is incorrect." , success: ''})
      } else {
        let formData =  new FormData()
        formData.append('file', file)

        setLoading(true)
        const res = await axios.post('/api/avatar/upload_avatar', formData, {
        headers: {'content-type': 'multipart/form-data', Authorization: token}
        })
        setLoading(false)
        setAvatar(res.data.url)
      }
      
  } catch (err) {
      setData({...data, err: err.response.data.msg , success: ''})
  }
}


const updateInfor = () => {
  toastr.options = {
    "closeButton": true,
    "debug": true,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  try {
      dispatch(updateUser({...data, 
        firstName: firstName? firstName : user?.result?.firstName,
        lastName: lastName? lastName : user?.result?.lastName,
        avatar: avatar? avatar : user?.result?.avatar,
      }))
      toastr["success"]("Your personal information has now been updated!", "Information Updated!")
  } catch (err) {
    toastr["error"]("There was an issue updating your personal information, please try again later!", "Update not possible!")
      setData({...data, err: err.response.data.msg , success: ''})
  }
}

useEffect(() => {
  let existing = localStorage.getItem("profile")
  existing = existing ? JSON.parse(existing) : {}
  existing.result["firstName"] = firstName? firstName : user?.result?.firstName ;
  existing.result["lastName"] = lastName? lastName : user?.result?.lastName;
  existing.result["avatar"] = avatar? avatar : user?.result?.avatar;
  // existing.result["password"] = password? password : user?.result?.password;
  window.localStorage.setItem("profile", JSON.stringify(existing))
  // console.log("updated")
})
      

    const updatePassword = async () => {
        toastr.options = {
        "closeButton": true,
        "debug": true,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }

      if(password !== cf_password) {
        toastr["error"]("Password is not the same as Confirm Password, please try again!", "No Match!")
      } else {
        const res = await axios.post(`/api/user/reset/${hash}`, {password})
        if(res){
        toastr["success"]("Your password is now updated, Next time sign in with your new Password!", "Password Changed!")
        } else {
        toastr["error"]("There was an issue updating your password, please try again later!", "Update not possible!")
        }
      }
    }

const handleUpdate = () => {
  if(firstName || lastName || avatar){
    updateInfor()
  }else if(password){
    updatePassword()
  } else {
    console.log("no update")
  }
}

  return (
    <>
    <PathBanner/>
    <section className="userInterface">
      <UserNavBar/>
        <main className="userSections">
          <div>
            {loading && <h3 className="loadingAvatar">Loading.....</h3>}
          </div>
          <div className="profile_page">
          <div className="avatar">
                <img src={avatar ? avatar : user?.result.avatar} alt=""/>
                <span>
                    <p>Change</p>
                    <FcOldTimeCamera/>
                    <input type="file" name="file" id="file_up" onChange={changeAvatar}/>
                </span>
            </div>
          <div  className="col-left">
            <h2>User Profile</h2>

            

            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" defaultValue={user?.result.firstName}
                placeholder="Your first name" onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName"
                placeholder="Your Last Name" defaultValue={user?.result.lastName} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"
                placeholder="Your email address" defaultValue={user?.result.email} disabled/>
            </div>

            <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input type="password" name="password" id="password"
                placeholder="Your password" value={password} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="cf_password">Confirm New Password</label>
                <input type="password" name="cf_password" id="cf_password"
                placeholder="Confirm password" value={cf_password} onChange={handleChange} />
            </div>

            <button onClick={handleUpdate} type="submit" disabled={loading}>Update</button>
        </div>
    </div>
        </main>
    </section>
    </>
  );
};

export default Dashboard;
