import "./List.css";

function List(props) {
  return (
    <div className="list">
      <img src={props.srcProps}className="im" alt={props.altProps} />
      <p>{props.title}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default List;