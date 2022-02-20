import './App.css';
import ExchangeRates from './components/ExchangeRates';

function App({gqlQuery}) {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ExchangeRates gqlQuery={gqlQuery}/>
    </div>
  );
}

export default App;
