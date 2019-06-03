import React, { Component } from 'react'
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';


export default class index extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <Footer/>
            </div>
        )
    }
}
