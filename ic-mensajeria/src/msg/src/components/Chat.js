import React, {Component} from 'react';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      messages: [
        //{id: 0, text:'texto1'},
        //{id: 1, text:'texto2'},
        //{id: 2, text:'texto3'}
      ]
    }
  }

  updateMessage(e){
    this.setState({message: e.target.value});
    console.log(this.state.message);
  }

  componentDidMount() {
    window.firebase.database().ref('messages/').on('value', snap => {
      const mensajesDB=snap.val();
      if (mensajesDB !== null) {
        this.setState({
          messages: mensajesDB
        });
      }
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const list =this.state.messages;
    const nuevoMensaje = {
      id : this.state.messages.length,
      text : this.state.message 
    };
    //list.push(nuevoMensaje);
    //this.setState({messages: list});
    window.firebase.database().ref(`messages/${nuevoMensaje.id}`)
      .set(nuevoMensaje);
    this.setState({message:''});
    //console.log('enter');
  }

  render() {

    const { messages } = this.state;
    const messagesList = messages.map(message => {
          return <li key={message.id}>{message.text}</li>
        });

    return (
      <div>
        <ol>
        {messagesList}
        </ol>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <input 
            type="text"
            onChange={this.updateMessage.bind(this)}
          />
          <button>
            Enviar
          </button>
        </form>
      </div>
    )
  }
}

export default Chat;