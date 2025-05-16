import '../styles/Header.css'

export default function Header() {
    return (
        <header className='header'>
            <div className="header-container">
                <h1 className="test1">Flag Memory game</h1>
                <div className="score-container">
                    <div className="score">Score: </div>
                    <div className="hi-score">Highest Score: </div>
                </div>
            </div>
        </header>
    )
}