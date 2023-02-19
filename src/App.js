import logo from './stackfails.jpg';
import './App.css';

function App() {
    return (
        <div className="App" data-testid='background' style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>
            <header className="App-header">
                <p>
                    Great job !
                </p>
                <a
                    className="App-link"
                    href="https://stackfails.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Check out the stack fails blog for more tutorials
                </a>
            </header>
        </div>
    );
}

export default App;
