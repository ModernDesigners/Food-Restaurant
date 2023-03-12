import DrowpDdown from "../../../images/icons/DropDown.png";
import Product1 from "../../../images/products/Product1.png";
import Product2 from "../../../images/products/Product2.png";
import Product3 from "../../../images/products/Product3.png";
import Product4 from "../../../images/products/Product4.png";
import "./MostOrdered.css";

export default function MostOrdered() {
  return (
    <div className="MostOrdered">
      <div className="MostOrderedStarter">
        <div className="name">Most Ordered</div>
        <div className="block">
          <img src={DrowpDdown} />
          Today
        </div>
      </div>
      <div className="lineO"></div>
      <div className="OrderedBlocks">
        <div className="OrderedBlock">
          <div className="ImgBlock">
            <img src={Product1} />
          </div>
          <div className="StatsN">
            <p className="StartN">Spicy seasoned seafood noodles</p>
            <p className="EndN">200 dishes ordered</p>
          </div>
        </div>
        <div className="OrderedBlock">
          <div className="ImgBlock">
            <img src={Product2} />
          </div>
          <div className="StatsN">
            <p className="StartN">Salted pasta with mushroom sauce</p>
            <p className="EndN">120 dishes ordered</p>
          </div>
        </div>
        <div className="OrderedBlock">
          <div className="ImgBlock">
            <img src={Product3} />
          </div>
          <div className="StatsN">
            <p className="StartN">Beef dumpling in hot and sour soup</p>
            <p className="EndN">80 dishes ordered</p>
          </div>
        </div>
      </div>
      <button className="EndButton">View All</button>
    </div>
  );
}
