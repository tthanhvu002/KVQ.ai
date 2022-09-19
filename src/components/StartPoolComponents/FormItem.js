import questionIcon from "../../img/question.svg";
import "./FormItem.scss";
const FormItem = ({ item }) => {
  switch (item.type) {
    case "text":
      return (
        <div className="input-wrap flex-column">
          <span>{item.label}</span>
          <input
            type="text"
            placeholder={item.placeholder}
            id={item.label}
          ></input>
        </div>
      );
    case "number":
      return (
        <div className="input-wrap flex-column">
          <span>{item.label}</span>
          <input
            type="password"
            placeholder={item.placeholder}
            id="inputPass"
          ></input>
        </div>
      );
    case "checkbox":
      return (
        <div className="input-wrap align-items-center">
          <input type="checkbox" />
          <span> {item.label} </span>
        </div>
      );
    case "textarea":
      return (
        <div className="input-wrap">
          <textarea placeholder={item.placeholder}></textarea>
        </div>
      );
    case "custom":
      return (
        <div className="input-wrap flex-column">
          <span> {item.label} </span>
          <input type="number" placeholder={item.placeholder} />
          <input type="range" class="range" min="0" max="100" />
        </div>
      );
    case "select":
      return (
        <div className="input-wrap flex-column">
          <p> {item.label} </p>
          <select aria-label={item.label}>
            {item.option.map((item, index) => {
              return (
                <option value={item}>
                  {item.match} {item.time}
                </option>
              );
            })}
          </select>
        </div>
      );
    case "information":
      return <p> {item.label} </p>;
    default:
      break;
  }
};

export default FormItem;
