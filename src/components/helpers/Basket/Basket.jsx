export default function Basket() {
  return (
    <aside className="aside">
      <div>
        <h3>My Basket</h3>
        <p>item</p>
      </div>
      <Checkout />
    </aside>
  );
}

function Checkout() {
  return (
    <form>
      <input />
      <Button />
    </form>
  );
}

function Button(props) {
  return <button>Click Me</button>;
}
