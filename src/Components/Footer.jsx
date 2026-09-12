import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <div className="footer__logo">💰</div>
          <div>
            <strong>FinDash</strong>
            <p>Controle financeiro inteligente</p>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4>Produto</h4>
            <a href="#">Recursos</a>
            <a href="#">Preços</a>
            <a href="#">Integrações</a>
          </div>
          <div className="footer__col">
            <h4>Empresa</h4>
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
            <a href="#">Carreiras</a>
          </div>
          <div className="footer__col">
            <h4>Suporte</h4>
            <a href="#">Ajuda</a>
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2025 FinDash. Todos os direitos reservados.</span>
        <div className="footer__socials">
          <a href="#" aria-label="GitHub">🐙</a>
          <a href="#" aria-label="LinkedIn">💼</a>
          <a href="#" aria-label="Twitter">🐦</a>
        </div>
      </div>
    </footer>
  );
}