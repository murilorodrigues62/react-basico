import './App.css';
import Comentario  from './components/Comentario';


function App() {
  return (
    <div className="App">
      <h1>My First React Project</h1>
      <Comentario name="Joao" email="joao@gmail.com" date={new Date(2022,7,1)}>
        Hello! First comment.
      </Comentario>
      <Comentario name="Maria" email="maria@gmail.com" date={new Date(2022,7,2)}>
        Hi Joao!
      </Comentario>
    </div>
  );
}

export default App;
