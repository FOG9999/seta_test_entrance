import React, { Component } from 'react';
import Table from "./Table";
import SwitchPage from "./SwitchPage";
import PostForm from "./PostForm";

class Display extends Component {
    state = {  
        show: false
    }
    onHideModal = () => {
        this.setState({
            show: false
        })
    }
    onOpenModal = () => {
        this.setState({
            show: true
        })
    }
    render() { 
        return (  
            <div>
                <div className="text-center my-2">
                    <big><b>Display Posts from API</b></big><br/>
                    <button className="btn btn-primary" onClick={this.onOpenModal}>Add Post</button>
                </div>
                <Table />
                <PostForm  onHide={this.onHideModal} show={this.state.show} />
                <SwitchPage />
            </div>
        );
    }
}
 
export default Display;