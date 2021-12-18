import {
  HumiditySensor,
  LuxSensor,
  ResidentCountSensor,
  TemperatureSensor,
} from "../store";
import { Wrap, Title, SensorWrap } from "../styles/BuildingItems";
import { Sensor, Building } from "../types";
import SensorContainer from "./SensorContainer";

const sensorTypeOne: Sensor[] = [TemperatureSensor];
const sensorTypeTwo: Sensor[] = [LuxSensor];
const sensorTypeThree: Sensor[] = [
  TemperatureSensor,
  LuxSensor,
  HumiditySensor,
];
const sensorTypeFour: Sensor[] = [ResidentCountSensor];

function BuildingExampleOne() {
  const buildingInfo: Building = {
    name: "하늘 아파트",
    ho: "101호",
  };
  return (
    <Wrap>
      <Title>
        {buildingInfo.name} {buildingInfo.ho}
      </Title>
      <SensorWrap>
        <SensorContainer
          building={buildingInfo}
          name="온도"
          title="온도 센서"
          interval={15}
          includeSensors={sensorTypeOne}
        />
        <SensorContainer
          building={buildingInfo}
          name="조도"
          title="조도 센서"
          interval={15}
          includeSensors={sensorTypeTwo}
        />
        <SensorContainer
          building={buildingInfo}
          name="온도,습도,조도 게이트웨이"
          title="온습조도 게이트웨이"
          interval={15}
          includeSensors={sensorTypeThree}
          inGateway
        />
        <SensorContainer
          building={buildingInfo}
          name="거주자 수"
          title="거주자 수 센서"
          interval={30}
          includeSensors={sensorTypeFour}
        />
      </SensorWrap>
    </Wrap>
  );
}

export default BuildingExampleOne;
