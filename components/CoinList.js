import Coin from "./Coin";

const CoinList = ({filteredCoins}) => {
    return (
        <>
            {filteredCoins.map(coin => (
                <Coin
                    key={coin.id}
                    name={coin.name}
                    id={coin.id}
                    price={coin.current_price}
                    image={coin.image}
                    symbol={coin.symbol}
                    marketcap={coin.market_cap}
                    volume={coin.total_volume}
                    priceChange={coin.price_change_percentage_24h}
                />
            ))}
        </>
    );
}

export default CoinList;