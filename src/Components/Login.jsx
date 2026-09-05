import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="login-section">
      <div className="login-box">

        <div className="login-heading">
          <span className="login-overline">
            BEM-VINDO DE VOLTA
          </span>

          <h1>
            Entre na sua
            <br />
            <span>conta.</span>
          </h1>

          <p>
            Acesse sua conta para continuar de onde parou.
          </p>
        </div>

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <label htmlFor="email">
              E-mail
            </label>

            <input
              id="email"
              type="email"
              placeholder="voce@exemplo.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="input-group">
            <div className="password-header">
              <label htmlFor="password">
                Senha
              </label>

              <button
                type="button"
                className="forgot-password"
              >
                Esqueceu a senha?
              </button>
            </div>

            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword((value) => !value)
                }
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>

          <label className="remember">
            <input type="checkbox" />
            <span>Lembrar de mim</span>
          </label>

          <button
            type="submit"
            className="login-button"
          >
            <span>Entrar</span>
            <span className="login-arrow">→</span>
          </button>
        </form>

        <p className="login-terms">
          Ao entrar, você concorda com nossos{" "}
          <a href="#terms">Termos de uso</a>
          {" "}e{" "}
          <a href="#privacy">Política de privacidade</a>.
        </p>

      </div>
    </section>
  );
}

export default Login;