// // screens/Signup.js
// import React, { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import Navbar from '../components/Navbar';
// export default function Signup() {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
//   let [address, setAddress] = useState("");
//   let navigate = useNavigate()

//   const handleClick = async (e) => {
//     e.preventDefault();
//     let navLocation = () => {
//       return new Promise((res, rej) => {
//         navigator.geolocation.getCurrentPosition(res, rej);
//       });
//     }
//     let latlong = await navLocation().then(res => {
//       let latitude = res.coords.latitude;
//       let longitude = res.coords.longitude;
//       return [latitude, longitude]
//     })
//     // console.log(latlong)
//     let [lat, long] = latlong
//     console.log(lat, long)
//     const response = await fetch("http://localhost:5000/api/auth/getlocation", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ latlong: { lat, long } })

//     });
//     const { location } = await response.json()
//     console.log(location);
//     setAddress(location);
//     setCredentials({ ...credentials, [e.target.name]: location })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/auth/createuser", {
//       // credentials: 'include',
//       // Origin:"http://localhost:3000/login",
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })

//     });
//     const json = await response.json()
//     console.log(json);
//     if (json.success) {
//       //save the auth toke to local storage and redirect
//       localStorage.setItem('token', json.authToken)
//       navigate("/login")

//     }
//     else {
//       alert("Enter Valid Credentials")
//     }
//   }

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })
//   }

//   return (
//     <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
//       <div>
//       <Navbar />
//       </div>

//         <div className='container' >
//           <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
//             <div className="m-3">
//               <label htmlFor="name" className="form-label">Name</label>
//               <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
//             </div>
//             <div className="m-3">
//               <label htmlFor="email" className="form-label">Email address</label>
//               <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
//             </div>
//             <div className="m-3">
//               <label htmlFor="address" className="form-label">Address</label>
//               <fieldset>
//                 <input type="text" className="form-control" name='address' placeholder='"Click below for fetching address"' value={address} onChange={(e)=>setAddress(e.target.value)} aria-describedby="emailHelp" />
//               </fieldset>
//             </div>
//             <div className="m-3">
//               <button type="button" onClick={handleClick} name="geolocation" className=" btn btn-success">Click for current Location </button>
//             </div>
//             <div className="m-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//               <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
//             </div>
//             <button type="submit" className="m-3 btn btn-success">Submit</button>
//             <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
//           </form>
//         </div>
//       </div>
//   )
// }

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the CSS file for styles
import Navbar from '../components/Navbar';

const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate("/");
        } else {
            alert("Invalid Credentials");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
            <div>
            <div><Navbar/></div>
        <div className="signup-container">
            <div className="signup-form-container">
                
                <form onSubmit={handleSubmit}>
                    <h2>Signup</h2>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input type="text" className="form-control" id="location" name="location" value={credentials.location} onChange={onChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Signup</button>
                    <div className="mt-3">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Signup;
