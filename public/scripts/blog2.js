var CommentBox = React.createClass({
  render: function(){
    return(
      <div className='commentBox'>
      <h3>Comments:</h3>
        <CommentForm />
        <CommentList />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return(
      <div className='commentList'>
        <Comment author={'Ian'}>This is the first comment. It is very interesting.</Comment>
        <Comment author={'Ian'}>This is the second comment. It twice as interesting as the first.</Comment>
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function(){
    return(
      <div className='comment'>
        <h4>{this.props.author}</h4>
        {this.props.children}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  handleSubmit: function() {
///// start back here //////
  },
  render: function() {
    return(
      <form className='commentForm' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Your Name' ref='author' />
        <input type='text' placeholder='Your Comment' ref='comment' />
        <input type='submit' value='Post Comment' />
      </form>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
