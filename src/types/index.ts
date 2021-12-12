export type DataRange = {
  0: number;
  1: number;
};

export type Sensor = {
  jsonId: string;
  name: string;
  dataRange?: DataRange;
};

export type Building = {
  name: string;
  ho: string;
};
