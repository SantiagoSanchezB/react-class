import React from 'react';
import { Component } from 'react';
import '../../css/index_css.css';
import Footer_A from '../footerComponent_A';

class DatosApi  extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        }
    }

   

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts', {method: 'get'})
        .then(response => response.json())
        .then(dataResponse => {
            this.setState({
                posts:dataResponse
            })
        });
    }

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
                                            <p>{u.title}</p>
                                            <p>{u.body}</p>
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