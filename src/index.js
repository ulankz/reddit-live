import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
class Reddit extends React.Component{

  state = {
    posts:[]
  };
  componentDidMount(){
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res =>
    {
      const new_posts = res.data.data.children.map(obj=>obj.data);
      this.setState({posts:new_posts});
    });
  }

  render(){
    return (
        <div className = "container">
        <h1>r/reactjs</h1>
        <ul>
        {this.state.posts.map(post=>{
          return <li key = {post.id}>
          <span className = "name">{post.name}</span>
          <span className = "score">Score{post.score}</span>
          <p className = "title">{post.title}</p></li>;
        })}
        </ul>
        </div>
    );
  }

}
ReactDOM.render(<Reddit/>,document.getElementById('root'));
