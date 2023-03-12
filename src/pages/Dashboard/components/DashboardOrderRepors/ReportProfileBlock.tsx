import "./ReportProfileBlock.css";
import profileCircle from "../../../../images/userCircles/Avatar1.png";
interface ReportProfileInterface {
  image: string;
  name: string;
  description: string;
  price: number;
  status: number;
}
export default function ReportProfileBlock({
  image,
  name,
  description,
  price,
  status,
}: ReportProfileInterface) {
  let getStatus = "getC";
  let getStatusText = "Completed";
  switch (status) {
    case 1:
      getStatus = "getPr";
      getStatusText = "Preparing";

      break;
    case 2:
      getStatusText = "Pending";
      getStatus = "getP";
      break;
  }
  return (
    <div className="ReportProfileBlock">
      <div className="g-3 RowSt">
        <img src={image} />
        {name}
      </div>
      <div className="g-3 getDR">{description}</div>
      <div className="g-2">${price}</div>
      <div className="g-2">
        <div className={`ProfileStatus ${getStatus}`}>{getStatusText}</div>
      </div>
    </div>
  );
}
