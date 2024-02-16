import './App.css'
import Numeros from './components/numeros'



function App() {
  return (
    <>
       <div className="portfolio">
        <header>
          <h1>Desenvolvedor Comercial</h1>
        </header>
        <main>
          <p>Olá, eu sou um desenvolvedor comercial com experiência em construir soluções tecnológicas para empresas.</p>
          <p>Entre em contato comigo para discutir como posso ajudar a sua empresa a alcançar seus objetivos.</p>
          <div className="contact">
            <p>Contato:</p>
            <ul>
              <li><strong>E-mail:</strong> jhonathanalves_br@hotmail.com</li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/+5534999227077">(34) 9 9922-7077</a></li>
            </ul>
          </div>
        </main>
        <footer>
          <p>Desenvolvido por Jhonathan Alves de Carvalho &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  )
}

export default App
