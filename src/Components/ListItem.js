
function ListItem(props) {
    return (
      <li>
        <a href={"/" + props.path.toLowerCase()} key={props.path}>
          {props.path}
        </a>
      </li>
    );
  }

export default ListItem;