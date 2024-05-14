import Button from "./components/Button/Button";
import Icon from "./components/Icon/Icon";

const App = () => {
  return (
    <div>
      <h1 className="">Mavericks</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
        consequatur!
      </p>
      <p className="-tracking-tinyTighter font-medium leading-5">Search</p>
      <Icon className="fill-almostWhite" iconId="icon-calendar" />
      <Button
        type="button"
        onClick={() => {}}
        className="px-15 text-chalk hocus:bg-carmineAccent bg-carmine"
      >
        Search
      </Button>
    </div>
  );
};

export default App;
