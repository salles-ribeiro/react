import "./Body.css";

const summaryCards = [
  { title: "Saldo Total", value: "R$ 24.580,00", change: "+12,5%", trend: "up", icon: "💵" },
  { title: "Receitas", value: "R$ 8.320,00", change: "+8,2%", trend: "up", icon: "📈" },
  { title: "Despesas", value: "R$ 3.145,00", change: "-3,1%", trend: "down", icon: "📉" },
  { title: "Investimentos", value: "R$ 15.200,00", change: "+18,7%", trend: "up", icon: "🏦" },
];

const transactions = [
  { id: 1, name: "Salário", category: "Receita", date: "05/01/2025", value: 6500, type: "in" },
  { id: 2, name: "Aluguel", category: "Moradia", date: "03/01/2025", value: 1800, type: "out" },
  { id: 3, name: "Supermercado", category: "Alimentação", date: "02/01/2025", value: 450, type: "out" },
  { id: 4, name: "Freelance", category: "Receita Extra", date: "28/12/2024", value: 1200, type: "in" },
  { id: 5, name: "Netflix", category: "Assinatura", date: "27/12/2024", value: 55, type: "out" },
];

const chartBars = [45, 62, 38, 78, 55, 90, 70, 85, 60, 95, 72, 88];
const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

const formatCurrency = (value) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function Body() {
  return (
    <main className="body">
      <div className="body__header">
        <div>
          <h2 className="body__title">Visão Geral</h2>
          <p className="body__subtitle">Acompanhe suas finanças em tempo real</p>
        </div>
        <button className="body__cta">+ Nova Transação</button>
      </div>

      {/* Summary Cards */}
      <section className="cards">
        {summaryCards.map((card) => (
          <article key={card.title} className="card">
            <div className="card__top">
              <span className="card__icon">{card.icon}</span>
              <span className={`card__trend card__trend--${card.trend}`}>
                {card.change}
              </span>
            </div>
            <h3 className="card__title">{card.title}</h3>
            <p className="card__value">{card.value}</p>
          </article>
        ))}
      </section>

      {/* Grid: Chart + Transactions */}
      <section className="grid">
        {/* Chart */}
        <div className="panel">
          <div className="panel__header">
            <h3 className="panel__title">Fluxo Mensal</h3>
            <span className="panel__tag">2025</span>
          </div>
          <div className="chart">
            {chartBars.map((height, i) => (
              <div key={i} className="chart__col">
                <div
                  className="chart__bar"
                  style={{ height: `${height}%` }}
                  title={`${months[i]}: ${height}%`}
                />
                <span className="chart__label">{months[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="panel">
          <div className="panel__header">
            <h3 className="panel__title">Últimas Transações</h3>
            <a href="#" className="panel__link">Ver todas</a>
          </div>
          <ul className="transactions">
            {transactions.map((tx) => (
              <li key={tx.id} className="transaction">
                <div className={`transaction__icon transaction__icon--${tx.type}`}>
                  {tx.type === "in" ? "↓" : "↑"}
                </div>
                <div className="transaction__info">
                  <strong>{tx.name}</strong>
                  <span>{tx.category} • {tx.date}</span>
                </div>
                <div className={`transaction__value transaction__value--${tx.type}`}>
                  {tx.type === "in" ? "+" : "-"} {formatCurrency(tx.value)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}