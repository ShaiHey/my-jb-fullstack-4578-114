import Details from '../details/Details';
import Header from '../header/Header';
import Skills from '../skills/Skills';
import './App.css'

function App(): JSX.Element {
  return (
    <div className='App'>
      <Header />
      <Details />
      <Skills />
    </div>
  )
}

export default App;