import "./Ranking.scss";
import Subheading from "./Subheading";

export default function TopBeer(props) {
  const ranking = [...props.storage];
  let rankingSort = ranking.sort((a, b) => a.amount - b.amount);
  const rankingMap = rankingSort.map((keg, i) => <li key={i}>{keg.name}</li>);

  return (
    <div className="topBeer">
      <Subheading label="Top Sellers" />
      <ul>{rankingMap}</ul>
    </div>
  );
}
