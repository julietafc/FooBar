import "./Home.scss";
export default function Home(props) {
  if (props.isCustomer) {
    props.setIsCustomer(false);
  }
  return <div className="Home"></div>;
}
