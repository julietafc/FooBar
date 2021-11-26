import "./Product.scss";
export default function Product(props) {
  return (
    <article className="Product">
      <h4>{props.name}</h4>
    </article>
  );
}
