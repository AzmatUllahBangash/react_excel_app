import React from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';


const NavbarComp = () => {

  
  const [inputs, setInputs] = React.useState({});
  
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    
    const name = (event.target as HTMLInputElement).name;
    const value = (event.target as HTMLInputElement).value;
    
    setInputs(values => ({ ...values, [name]: value }));
  }
  
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post('http://localhost:80/excel_api/user/save',inputs);

      console.log(inputs);
}
  
  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.get('http://localhost:80/excel_api/user/save',inputs);

      console.log(inputs);
}

  return (
    <>
         <nav className="navbar navbar-expand-lg " style={{background:'#232629'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Excel Like App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link className="nav-link " to="/sheetdata">SheetData</Link>
        </li>
        <li className="nav-item ">
          <a className="nav-link" data-bs-toggle="modal" data-bs-target="#signIn" href="#">Sign In</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" data-bs-toggle="modal" data-bs-target="#signUpModal" href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  </div>
          </nav>
          





            {/* Sign In modal */}
      <div className="modal " id="signIn" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign In</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            <div className="modal-body">
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3 row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="text" onChange={handleChange} name='email' className="form-control" id="staticEmail" placeholder='email' />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" onChange={handleChange} name='password' className="form-control" id="inputPassword" placeholder='password' />
              </div>
            </div>
            <div className="mb-3 row">
              
              <div className="col-sm-10">
                <input className='btn btn-primary' type="submit" name='submit' />
              </div>
                          </div>
          </form>
                </div>
              
              </div>
            </div>
          </div>
          







            {/* SignUp modal */}
      <div className="modal " id="signUpModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign Up</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" onChange={handleChange} name='name' className="form-control" id="name" placeholder='name' />
          </div>
        </div>
            <div className="mb-3 row">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" onChange={handleChange} name='email'  className="form-control" id="email" placeholder='email' />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" onChange={handleChange} name='password' className="form-control" id="inputPassword" placeholder='password' />
          </div>
                                </div>
                                <div className="mb-3 row">
          
          <div className="col-sm-10">
            <input  className='btn btn-primary' type="submit" name='submit' />
          </div>
                                    </div>
                                    </form>
            </div>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarComp
