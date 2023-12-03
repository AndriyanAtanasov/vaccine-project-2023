import { Link } from "react-router-dom";

const VaccineListItem = ({
  _id,
  vaccineType,
  vaccineDate,
  firstName,
  lastName,
  email,
  phoneNumber,
}) => {
  return (
    <tbody>
      <tr>
        <td>
          <ul>
            <li> {vaccineType}</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>{vaccineDate}</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>
              {firstName} {lastName}
            </li>
          </ul>
        </td>
        <td>
          <ul>
            <li>{email}</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>{phoneNumber}</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>
              <Link to={`/vaccine/${_id}`} className="read_more ">
                Details
              </Link>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  );
};

export default VaccineListItem;
