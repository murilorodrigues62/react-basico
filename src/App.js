import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comments: [
      {
        name: 'Joao',
        email: 'joao@gmail.com',
        date: new Date(2022, 7, 1),
        message: 'Hello React! I am the firt here!!!'
      },
      {
        name: 'Maria',
        email: 'maria@gmail.com',
        date: new Date(2022, 7, 2),
        message: 'Hi Joao!!!'
      }
    ],
    newComment: {
      name: '',
      email: '',
      message: ''
    }
  }

  addComment = event => {
    event.preventDefault(); // cancel post event

    const newComment = { ...this.state.newComment, date: new Date()}

    this.setState({
      comments: [...this.state.comments, newComment], // Spread
      newComment: {name: '', email: '', message: ''}
    });

  }

  onChange = event => {
    const {name, value} = event.target;    
    this.setState({newComment: {...this.state.newComment, [name]: value} })
  }

  render() {
    return (
      <div className="App">
        <h1>My First React Project</h1>

        {this.state.comments.map((comment, index) => (
          <Comentario
            key={index}
            name={comment.name}
            email={comment.email}
            date={comment.date}>
            {comment.message}
          </Comentario>
        ))}

        <form method='post' onSubmit={this.addComment}>
          <h2>Add comment</h2>
          <div>
            <input
              type='text'
              name='name'
              value={this.state.newComment.name}
              onChange={this.onChange}
              placeholder='Your name'></input>
          </div>
          <div>
            <input
              type='email' 
              value={this.state.newComment.email} 
              onChange={this.onChange}
              name='email' 
              placeholder='Your email'></input>
          </div>
          <div>
            <textarea 
            name='message' 
            value={this.state.newComment.message} 
            onChange={this.onChange}
            rows='4'></textarea>
          </div>
          <button type='submit'>Post comment</button>
        </form>
      </div>
    );
  }
}

export default App;
