import "./List.css";

function List(props) {
  return (
    <div className="list">
      <img src={props.list.src}className="im" alt={props.list.alt} />
      <p>{props.list.title}</p>
      <p>{props.list.price}</p>
    </div>
  );
}

export default List;