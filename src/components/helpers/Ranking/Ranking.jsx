import "./Ranking.scss";

export default function TopBeer(props) {
    const ranking = props.storage;
    const rankingMap = ranking.map((keg, i ) => <li key={i}>{keg.name}</li> );
    let rankingSort = rankingMap.sort((a,b)=>a.keg > b.keg)

    return (
        <div>
            <h3>Top Selling Beers</h3>
            <ul>{rankingSort}</ul>
        </div>
    )

}


