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
            <Link to={`/vaccine/${_id}`} className="read_more">
              Info
            </Link>
          </li>
        </ul>
      </td>
    </tbody>
  );
};

export default VaccineListItem;
