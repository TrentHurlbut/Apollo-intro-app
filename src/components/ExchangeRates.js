import {
  useQuery,
} from "@apollo/client";

function ExchangeRates({ gqlQuery }) {
  const { loading, error, data } = useQuery(gqlQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default ExchangeRates;