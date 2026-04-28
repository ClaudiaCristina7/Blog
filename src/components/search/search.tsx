import "./search.css";
import magnifier from "../../assets/magnifier.svg";

export interface SearchInterface {
  onSubmit: (value: string) => void;
}

export default function Search({ onSubmit }: SearchInterface) {
  return (
    <div className="search-icon">
      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault();

          onSubmit("submitted");
        }}
      >
        <img src={magnifier} alt="searchbar" className="magnifier" />
      </form>
    </div>
  );
}
