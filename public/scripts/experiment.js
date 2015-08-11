var TextBox = React.createClass({
  getInitialState: function() {
    return{
      display: "Starting here..."
    }
  },
  changeDisplay: function() {
    this.setState({
      display:"Hey, thanks"

    })
  },
  alertClicked: function() {
    alert('you clicked me!')
  },
  makePurple: function() {
    $('.blueDiv').toggleClass('purpleDiv')
  },
  render: function() {
    return(
      <div className='textBox'>
        <Button
          buttonText={'Change State!'}
          whenClicked={this.changeDisplay}
        />
        <h2>{this.state.display}</h2>

        <Text
          message={'this is a message passed via a prop'}
          secondMessage={'this is the second message from a different prop'}
          href={'www.google.com'}
        />
        <br />
        <Button
          buttonText={'click me!'}
          whenClicked={this.alertClicked}
        />
        <br />
        <Table
          header1={'first column'}
          header2={'second column'}
          detail1={'first detail'}
          detail2={'second detail'}
        />
        <br />
        <BlueDiv
          text={'this text is blue, click to make it purple!'}
          purplify={this.makePurple}
        />
      </div>
    );
  }
});

var Text = React.createClass({
  render: function() {
    return(
      <div className='text'>
        {this.props.message}
        <br />
        {this.props.secondMessage}
        <br />
        go to <a href={this.props.href}>google.com</a>
      </div>
    );
  }
});

var Button = React.createClass({
  render: function() {
    return(
      <div className='button'>
        <button onClick={this.props.whenClicked}>{this.props.buttonText}</button>
      </div>
    );
  }
});

var Table = React.createClass({
  render: function() {
    return(
      <div className='table'>
      <table>
          <tr>
            <th>{this.props.header1}</th>
            <th>{this.props.header2}</th>
          </tr>
          <tr>
            <td>{this.props.detail1}</td>
            <td>{this.props.detail2}</td>
          </tr>
        </table>
      </div>
    );
  }
});

var BlueDiv = React.createClass({
  render: function() {
    return(
      <div className='blueDiv' onClick={this.props.purplify}>
        {this.props.text}
      </div>
    );
  }
});

// var Click = React.createClass({
//   render: function() {
//     return(
//       <div className='click'>
//         {this.props.clickText}
//       </div>
//     );
//   }
// });

React.render(
  <TextBox />,
  document.getElementById('content')
);
