import './App.css'
import { CinduxaTablet } from './components/CinduxaTablet'
import { Typewriter } from './components/Typewriter'
import { useState } from 'react';

function App() {
  const [isButtonShowing, setIsButtonShowing] = useState(false);

  const onWriteFinish = () => setIsButtonShowing(true);

  return (
    <>
      {/* <header></header> */}
      <main>
        <section>
          <div>
            <CinduxaTablet />
            <h2><Typewriter text="Olá! Eu sou a Cinduxa, sua taróloga virtual!" delay={100} onFinish={onWriteFinish} /></h2>
          </div>
          {isButtonShowing && <button>Começar tour</button>}
        </section>
      </main>
    </>
  )
}

export default App
