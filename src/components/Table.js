import React from "react";


// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Table(props) {

  return (
    // <ul className="list-group">
    //   {props.friends.map(item => (
    //     <li className="list-group-item" key={item.id}>
    //       {item.name}
    //     </li>
    //   ))}
    // </ul>

    <div>
      <tr>
        <td>
          <img src= {props.imageURL} alt="" />
        </td>

        <td> {props.name} </td>
        <td> {props.phone} </td>4
        <td> {props.email} </td>
      </tr>
    </div>

  );
}

export default Table;
