import React, { Component } from 'react';
import {connect} from "react-redux";
import {PostActions} from "../redux/actions/PostActions";

class SwitchPage extends Component {
    state = {  }
    render() { 
        return (  
            <div className="text-center">
                <button className="btn btn-primary" onClick={this.onPrevious}
                disabled={(this.props.page <= 1)}>Previous</button>
                <span className="p-2">{this.props.page}</span>
                <button className="btn btn-primary" onClick={this.onNext}
                disabled={this.props.length < 15}>Next</button>
            </div>
        );
    }
    onPrevious = () => {
        this.props.getposts(this.props.page-1)
    }
    onNext = () => {
        this.props.getposts(this.props.page+1)
    }
    componentDidMount(){
        this.props.getposts(this.props.page)
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
        length: state.posts.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getposts: (page) => {
            dispatch(PostActions.getPosts(page))
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SwitchPage);