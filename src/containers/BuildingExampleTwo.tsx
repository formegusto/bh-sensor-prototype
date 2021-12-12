import {
  HumiditySensor,
  LuxSensor,
  ResidentCountSensor,
  ResidentDistributionSensor,
  SkinTemperatureSensor,
  TemperatureSensor,
} from "../store";
import { SensorWrap, Title, Wrap } from "../styles/BuildingItems";
import { Building, Sensor } from "../types";
import SensorContainer from "./SensorContainer";

const sensorTypeOne: Sensor[] = [TemperatureSensor, LuxSensor, HumiditySensor];
const sensorTypeTwo: Sensor[] = [ResidentCountSensor];
const sensorTypeThree: Sensor[] = [SkinTemperatureSensor];
const sensorTypeFour: Sensor[] = [ResidentDistributionSensor];

function BuildingExampleTwo() {
  const buildingInfo: Building = {
    name: "하늘 아파트",
    ho: "102호",
  };
  return (
    <Wrap>
      <Title>
        {buildingInfo.name} {buildingInfo.ho}
      </Title>
      <SensorWrap>
        <SensorContainer
          building={buildingInfo}
          name="온도,습도,조도"
          title="온도,습도,조도"
          interval={15}
          includeSensors={sensorTypeOne}
        />
        <SensorContainer
          building={buildingInfo}
          name="거주자 수"
          title="거주자 수"
          interval={30}
          includeSensors={sensorTypeTwo}
        />
        <SensorContainer
          building={buildingInfo}
          name="피부온도"
          title="피부온도"
          interval={45}
          includeSensors={sensorTypeThree}
        />
        <SensorContainer
          building={buildingInfo}
          name="거주자 분포"
          title="거주자 분포"
          interval={60}
          includeSensors={sensorTypeFour}
        />
      </SensorWrap>
    </Wrap>
  );
}

export default BuildingExampleTwo;
