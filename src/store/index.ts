import { Sensor } from "../types";

export const IsStaySensor: Sensor = {
  jsonId: "isStay",
  name: "재실유무",
};

export const ResidentCountSensor: Sensor = {
  jsonId: "residentCount",
  name: "거주자 수",
  dataRange: [0, 10],
};

export const TemperatureSensor: Sensor = {
  jsonId: "temperature",
  name: "온도",
  dataRange: [16, 40],
};

export const HumiditySensor: Sensor = {
  jsonId: "humidity",
  name: "습도",
  dataRange: [50, 100],
};

export const LuxSensor: Sensor = {
  jsonId: "lux",
  name: "조도",
  dataRange: [50, 100],
};

export const SkinTemperatureSensor: Sensor = {
  jsonId: "skinTemperature",
  name: "피부온도",
  dataRange: [35, 38],
};

export const ResidentDistributionSensor: Sensor = {
  jsonId: "residentDistribution",
  name: "거주자 분포",
  dataRange: [3, 5],
};

export const Satisfaction: Sensor = {
  jsonId: "satisfaction",
  name: "만족도",
  dataRange: [10, 100],
};
