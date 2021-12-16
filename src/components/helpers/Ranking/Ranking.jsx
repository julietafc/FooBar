export default function TopBeer(props) {
<<<<<<< HEAD
  const ranking = [...props.storage];
  let rankingSort = ranking.sort((a, b) => a.amount - b.amount);
  const rankingMap = rankingSort.map((keg, i) => <li key={i}>{keg.name}</li>);

  return (
    <div>
      <h3>Top Selling Beers</h3>
      <ul>{rankingMap}</ul>
    </div>
  );
=======
    const ranking = [...props.storage];
    let rankingSort = ranking.sort((a, b)=>a.amount-b.amount);
    const rankingMap = rankingSort.map((keg, i ) => <li key={i}>{keg.name}</li> );

    return (
        <div className="topBeer">
            <h3>Top Sellers</h3>
            <ul>{rankingMap}</ul>
        </div>
    )

>>>>>>> salesStyle
}
