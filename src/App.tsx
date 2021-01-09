import {FC} from "react";
import SampleComponent from "./sample.component";
import Stuff from "./interfaces/rocket-ticket";

const App: FC = (props) => {
  const newStuff: Stuff = {
    id: '123',
    years: 22,
  };

  return (<div>
    <SampleComponent stuff={newStuff}/>
  </div>);
};

export default App;