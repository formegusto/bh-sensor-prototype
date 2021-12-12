import styled from "styled-components";
import BuildingExampleOne from "./containers/BuildingExampleOne";
import BuildingExampleTwo from "./containers/BuildingExampleTwo";

function App() {
  return (
    <Wrap>
      <BuildingExampleOne />
      <BuildingExampleTwo />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: columns;
`;

export default App;
