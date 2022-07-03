import React, { Component } from 'react'



import axios from 'axios';
import SpreadSheet from './components/SpreadSheet';

export default class Home extends Component {

  // handleSubmit= (e: React.FormEvent<HTMLFormElement>)=>{
  //   e.preventDefault();
  // }
  state = {
    file: null
  }

  handleFile = (event) => {
    let file = event.target.files[0];

    this.setState({ file: file });

  }

  handleUpload = (event) => {

    console.log(this.state)

    let file = this.state.file;

    let formData = new FormData()

    formData.append('file', file);
    formData.append('name', 'Azmat');
    axios({
      url: 'http://localhost:80/excel_api/excel.php',
      method: "post",
      data: formData,

    }).then((res) => {

    })


  }

  // code to fetch data from countries table

render() {
  return (
    <>
      

      <div className="container">
        <div className="row mt-3">
        <SpreadSheet></SpreadSheet>
        </div>
      <div className="row">
        <div className="col-md-3">
          
      <form className='mt-3'>
        <input type="file" className='form-control text-white btn btn-danger' name="file" onChange={(e) => this.handleFile(e)} />
        <button type='button' className='btn btn-primary mt-1' onClick={(e) => this.handleUpload(e)}>Upload</button>
      </form>
        </div>
      </div>
      </div>


    </>
  )
}
}

















// import React from 'react';
// import SpreadSheet from './components/SpreadSheet';

// const Home = () => {
//   return (
//     <>
//       <SpreadSheet />
      



//     </>
//   )
// }

// export default Home
