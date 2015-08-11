var TextBox = React.createClass({
  getInitialState: function() {
    return{
      display: "Starting here...",
      number: 1,
      scaryText: 'BOO!',
      garbage: '',
      textToChange: 'type to change this text',
      wordPurple: false,
      buttonPurple: true,
      wordColor: 'This Text is BLUE!',
      buttonColor: 'Click to Change Text to PURPLE!',
      coloredButton: false
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
  increaseCounter: function() {
    this.setState({
      number: this.state.number + 1
    })
  },
  makeScary: function() {
    this.setState({
      scaryText: this.state.scaryText + ' BOO!'
    })
  },
  makeReallyScary: function() {
    this.setState({
      scaryText: this.state.scaryText + ' ' + this.state.scaryText
    })
  },
  addGarbage: function() {
    const letters=['a', 'b', 'c', 'd', 'e', 'f', 'g']
    const letter = (letters[Math.floor((this.state.garbage.length)/3)])
    this.setState({
      garbage: this.state.garbage + letter
    })
  },
  randomMessage: function() {
    const messages = ['You can do it!','Just keep at it and you WILL succeed!','There is no time like the present!','Hard work pays off!','Don\'t let the bastards bring you down!','Don\'t give up!','Never give up just because things get hard!','Turn to a friend when in trouble!']
    const message = messages[Math.floor(Math.random()*messages.length)]
    this.setState({
      random: message
    })
  },
  changeTextToChange: function(event) {
    this.setState({
      textToChange: event.target.value
    })
  },
  alertChanged: function() {
    var value = this.state.textToChange
    alert(value)
  },
  toggleColors: function() {
    $('.blueText').toggleClass('purpleText');
    $('.purpleButton').toggleClass('blueButton');
    this.setState({
      wordPurple: !this.state.wordPurple,
      buttonPurple: !this.state.buttonPurple
    });
    if(this.state.wordPurple) {
      this.setState({
        wordColor: 'This Text is BLUE!',
        buttonColor: 'Click to Change Text to PURPLE!'
      })
    } else {
      this.setState({
        wordColor: 'This Text is PURPLE!',
        buttonColor: 'Click to Change Text to BLUE!'
      })
    }

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
        <hr />
        <Button
          buttonText={'click me!'}
          whenClicked={this.alertClicked}
        />
        <hr />
        <Table
          header1={'first column'}
          header2={'second column'}
          detail1={'first detail'}
          detail2={'second detail'}
        />
        <hr />
        <BlueDiv
          text={'this text is blue, click to make it purple!'}
          purplify={this.makePurple}
        />
        <hr />
        <Counter
          number={this.state.number}
          tickUp={this.increaseCounter}
        />
        <hr />
        <Scary
          scaryText={this.state.scaryText}
        />
        <Button
          buttonText={'Scarify!'}
          whenClicked={this.makeScary}
        />
        <Button
          buttonText={'Make Really Scary!'}
          whenClicked={this.makeReallyScary}
        />
        <hr />
        <GarbageText
          garbage={this.state.garbage}
        />
        <Button
          buttonText={'Garbagify'}
          whenClicked={this.addGarbage}
        />
        <hr />
        <RandomMessage
          random={this.state.random}
        />
        <Button
          buttonText={'Click for a Motivational Message'}
          whenClicked={this.randomMessage}
        />
        <hr />
        <SeeTextChange
          textToChange={this.state.textToChange}
          changeTextToChange={this.changeTextToChange}
        />
        <Button
          buttonText={this.state.textToChange}
          whenClicked={this.alertChanged}
        />
        <hr />
        <BlueToPurple
          words={this.state.wordColor}
        />
        <Button
          coloredButton={true}
          buttonText={this.state.buttonColor}
          whenClicked={this.toggleColors}
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
        <hr />
        {this.props.secondMessage}
        <hr />
        go to <a href={this.props.href}>google.com</a>
      </div>
    );
  }
});
var Button = React.createClass({
  render: function() {
    if(this.props.coloredButton == true){
      return(
        <div className='button'>
          <button className='button purpleButton' onClick={this.props.whenClicked}>{this.props.buttonText}</button>
        </div>
      );
    }else{
      return(
        <div className='button'>
          <button className='button' onClick={this.props.whenClicked}>{this.props.buttonText}</button>
        </div>
      )
    }
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
var Counter = React.createClass({
  render: function() {
    return(
      <div className='counter' onClick={this.props.tickUp}>
        <h4>Click to increase the counter: {this.props.number}</h4>
      </div>
    );
  }
});
var Scary = React.createClass({
  render: function() {
    return(
      <div className='scary'>
        {this.props.scaryText}
      </div>
    );
  }
});
var GarbageText = React.createClass({
  render: function() {
    return(
      <div className='garbageText'>
        Current Garbage Text: {this.props.garbage}
      </div>
    );
  }
});
var RandomMessage = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.random}
      </div>
    );
  }
});
var SeeTextChange = React.createClass({
  render: function() {
    return(
      <div className='changableText'>
        <p>
          <input type='text' onChange={this.props.changeTextToChange} />:
          {this.props.textToChange}
        </p>
      </div>
    );
  }
});
var BlueToPurple =React.createClass({
  render: function() {
    return(
      <div className='blueToPurple blueText'>
        <h3>{this.props.words}</h3>
      </div>
    );
  }
});

React.render(
  <TextBox />,
  document.getElementById('content')
);
