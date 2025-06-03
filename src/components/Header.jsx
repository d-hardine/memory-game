import '../styles/Header.css'
import catLogo from '../assets/cat-logo.png'

export default function Header() {
    return (
        <header className='header'>
            <div className="header-container">
                <h1 className="app-title">Cat Memory game</h1>
                <img className='cat-logo' src={catLogo} alt="cat-logo" width={150 + 'px'}/>
            </div>
        </header>
    )
}