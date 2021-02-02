import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class PostForm extends Component {
    state = {
        userID: 0,
        ID: 0,
        title: "",
        body: ""
    }
    onChangeInputField = (e) => {
        this.setState({
            [e.target.name]: (e.target.type === "text") ? e.target.value : parseInt(e.target.value)
        })
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} >
                <Modal.Header closeButton>
                    <Modal.Title>
                        PostForm
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label><b>UserID:</b></label><br />
                    <input type="number" name="userID" className="form-control" value={this.state.userID} onChange={this.onChangeInputField} />
                    <label><b>ID:</b></label><br />
                    101<br/>
                    <label><b>Title:</b></label><br />
                    <input type="text" name="title" className="form-control" value={this.state.title} onChange={this.onChangeInputField} />
                    <label><b>Body:</b></label><br />
                    <textarea type="text" name="body" className="form-control" value={this.state.body} onChange={this.onChangeInputField} />
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary mr-2">Save</button>
                    <button className="btn btn-dark" onClick={this.props.onHide}>Close</button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default PostForm;