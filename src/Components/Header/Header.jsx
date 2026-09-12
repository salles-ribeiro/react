import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__logo">💰</div>
        <div>
          <h1 className="header__title">FinDash</h1>
          <span className="header__subtitle">Painel Financeiro</span>
        </div>
      </div>

      <nav className="header__nav">
        <a href="#" className="header__link header__link--active">Visão Geral</a>
        <a href="#" className="header__link">Transações</a>
        <a href="#" className="header__link">Relatórios</a>
        <a href="#" className="header__link">Metas</a>
      </nav>

      <div className="header__actions">
        <button className="header__icon-btn" aria-label="Notificações">
          🔔
          <span className="header__badge">3</span>
        </button>
        <div className="header__user">
          <div className="header__avatar">JD</div>
          <div className="header__user-info">
            <strong>John Doe</strong>
            <span>Premium</span>
          </div>
        </div>
      </div>
    </header>
  );
}