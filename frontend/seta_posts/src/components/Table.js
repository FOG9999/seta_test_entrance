import React, { Component } from 'react';
import {connect} from "react-redux";

class Table extends Component {
    state = {  }
    render() { 
        return (  
            <table className="table">
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.posts.map((post, index) => {
                            return (<tr>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
 
export default connect(mapStateToProps, null)(Table);