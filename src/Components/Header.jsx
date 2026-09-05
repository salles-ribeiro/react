function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="brand">
          <span className="brand-icon">S</span>
          <span className="brand-name">Salles</span>
        </a>

        <nav className="header-nav">
          <a href="#sobre">Sobre</a>
          <a href="#suporte">Suporte</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;