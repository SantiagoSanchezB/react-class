import React from 'react';
import { Component } from 'react';
import '../../css/index_css.css';
import Footer_A from '../footerComponent_A';
import axios from 'axios';

class DatosApi  extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp =>{
            this.setState({
                posts: resp.data
            })
        })
    }

   

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
    //     .then(response => response.json())
    //     .then(dataResponse => {
    //         this.setState({
    //             posts:dataResponse
    //         })
    //     });
    // }

    render(){
        const {posts} = this .state;
        return(
            <>
                <div>
                    {
                        posts.map( u => (
                            <>
                                <div class="Element">
                                    <div className="card">
                                        <div class="card-body">
                                            <h5 class="card-title">{u.id}</h5>
                                            <p><b>Nombre:</b> {u.name}</p>
                                            <p><b>Username:</b> {u.username}</p>
                                            <p><b>Correo:</b> {u.email}</p>
                                            <p><b>Direccion:</b> </p>
                                            <div class="Sub-text">
                                                <p><b>Barrio:</b> {u.address.street}</p>
                                                <p><b>Apto:</b> {u.address.suite}</p>
                                                <p><b>Ciudad:</b> {u.address.city}</p>
                                                <p><b>Codigo Postal:</b> {u.address.zipcode}</p>
                                            </div>
                                            <p><b>Geolocalizacion</b></p>
                                            <div class="Sub-text">
                                                <p><b>Latitud:</b> {u.address.geo.lat}</p>
                                                <p><b>Longitud:</b> {u.address.geo.lng}</p>
                                            </div>  
                                        </div>
                                    </div>
                                </div> 
                            </>
                        ))
                    }
                </div>
                <Footer_A/>
            </>
        )
    }
}

export default DatosApi;