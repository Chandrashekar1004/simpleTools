import "./Header.css"

function Header() {

  const url="./src/assets/inc_dec.JPG"
  const profile="https://github.com/Chandrashekar1004"

  return (
    <header className="Header">
    <h1 className="title">
       SIMPLE TOOLS
    </h1>
    <img src={url} alt="Logo" className="LOGO"></img>
    <a href={profile} className="creator" target="_blank">
    <h2>&copy; Chandrashekar </h2>
    </a>
    </header>
  )
}

export default Header
