import { useState } from "react";
import "./HomeHeader.css";
import { AiOutlineSearch } from "react-icons/ai";
import { localDate } from "../../../../components/LocalDate";
import { HomeFilterApi } from "../../../../api/HomeFiltersAPI";
export default function HomeHeader() {
  const [activeFilter, setActiveFilter] = useState(0);
  return (
    <div className="homepage-header">
      <div className="homeheader-top">
        <div>
          <h1>Jaegar Resto</h1>
          <h4>{localDate()}</h4>
        </div>
        <div>
          <AiOutlineSearch />
          <input type="text" placeholder="Search for food, coffe, etc.." />
        </div>
      </div>
      <div className="homeheader-filter">
        {HomeFilterApi.map((e, i) => (
          <h3
            key={i}
            className={`${activeFilter == i ? "ActiveFilter" : ""}`}
            onClick={() => setActiveFilter(i)}
          >
            {e}
          </h3>
        ))}
      </div>
    </div>
  );
}
