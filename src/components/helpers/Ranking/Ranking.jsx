import "./Ranking.scss";

export default function TopBeer(props) {
    const ranking = [...props.storage];
    let rankingSort = ranking.sort((a, b)=>a.amount-b.amount);
    const rankingMap = rankingSort.map((keg, i ) => <li key={i}>{keg.name}</li> );

    return (
        <div>
            <h3>Top Selling Beers</h3>
            <ul>{rankingMap}</ul>
        </div>
    )

}


