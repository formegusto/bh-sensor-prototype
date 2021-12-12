import styled, { css } from "styled-components";
import { Sensor } from "../types";

export type SensorComponentProps = {
  title: string;
  interval: number; // seconds
  includeSensors: Sensor[];
  inGateway?: boolean;
};

interface props extends SensorComponentProps {
  requestJson: string | null;
}

function SensorComponent({
  title,
  interval,
  includeSensors,
  inGateway,
  requestJson,
}: props) {
  return (
    <SensorBlock>
      <Header>
        <Title>{title}</Title>
        <Time>{new Date().toISOString()}</Time>
      </Header>
      <Body>
        <InSensors inGateway={includeSensors.length > 1}>
          {includeSensors.length > 1 ? (
            includeSensors.map((_, idx) => (
              <InSensorText key={_.jsonId}>{_.name}</InSensorText>
            ))
          ) : (
            <code>
              <pre>{requestJson}</pre>
            </code>
          )}
        </InSensors>
        {includeSensors.length > 1 && (
          <Gateway>
            <code>
              <pre>{requestJson}</pre>
            </code>
          </Gateway>
        )}
        <Response></Response>
      </Body>
    </SensorBlock>
  );
}

const SensorBlock = styled.div`
  width: 325px;

  margin: 0 20px 40px;
  border: 1px solid #333;
  padding: 20px;
`;

const Header = styled.div`
  height: 50px;

  display: flex;
  justify-content: space-between;

  margin: 0 20px 0 0;
`;
const Title = styled.h1`
  margin: 0 20px 0 0;
`;
const Time = styled.h2``;

const Body = styled.div`
  display: flex;
  flex-wrap: no-wrap;

  & > div {
    flex: 1;
  }

  height: 300px;
`;
const InSensors = styled.div<{ inGateway: boolean }>`
  font-size: 12px;
  ${(props) =>
    props.inGateway
      ? css`
          flex: 0.25 !important;
        `
      : css`
          padding: 0px 20px;
          overflow: scroll;
        `}
`;
const InSensorText = styled.p`
  margin: 0 0 8px;
`;

const Gateway = styled.div`
  padding: 10px 20px;

  font-size: 12px;
  overflow: scroll;
`;

const Response = styled.div`
  border: 1px solid #333;

  margin: 0 0 0 20px;
`;

export default SensorComponent;
