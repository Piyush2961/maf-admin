import React from 'react'

const AddItem = () => {
    const addImage = (e) =>{
        e.preventDefault()
        
            var axios = require('axios');
            var FormData = require('form-data');
            // var fs = require('fs');
            var data = new FormData();
            data.append('photo', document.getElementById('photo').value);

            console.log(data)

            var config = {
            method: 'post',
            url: 'https://maf-admin-api.herokuapp.com/api/users/upload',
           
            data : data
            };

            axios(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            });          
    }

  return (
    <div>
        <input type="file" name="" id="photo" />
        <button type="submit" onClick={addImage}>
            add
        </button>
    </div>
  )
}

export default AddItem