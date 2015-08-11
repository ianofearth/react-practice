var data = [
  {name: 'Ian', content: 'This is the first post. It is very interesting.'},
  {name: 'Ian', content: 'This is the second post.  It is twice as interesting as the first.'}
]

var BlogBox = React.createClass({
//   getInitialState: function() {
//     return {data: []};
// },
  render: function() {
    return(
      <div className='blogBox'>
        this will be a blog
        <PostForm />
        <PostList data={this.state.data}/>
      </div>
    );
  }
});

var PostList = React.createClass({
  render: function() {
    var postNodes = this.props.data.map(function (post) {
      return (
        <Post name={post.name}>
          {post.content}
        </Post>
      );
    });
    return(
      <div className='postList'>
        {postNodes}
      </div>
    );
  }
});

var Post = React.createClass({

  render: function() {
    return(
      <div className='post'>
        <h3 className='postName'>
          {this.props.name}
        </h3>
        <h4>{this.props.children}</h4>
      </div>
    );
  }
});

var PostForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var name = React.findDOMNode(this.refs.name).value.trim();
    var content = React.findDOMNode(this.refs.content).value.trim();
    if (!name || !content) {
      return;
    }
    React.findDOMNode(this.refs.name).value = '';
    React.findDOMNode(this.refs.content).value = '';
  },
  render: function() {
    return(
      <div className='postForm'>
        <form className='postForm' onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Your Name' ref='name' />
          <br />
          <input type='text' placeholder='Post Content' ref='content' />
          <br />
          <input type='submit' value='Create Post' />
        </form>
      </div>
    );
  }
});

React.render(
  <BlogBox data={data}/>,
  document.getElementById('content')
);
