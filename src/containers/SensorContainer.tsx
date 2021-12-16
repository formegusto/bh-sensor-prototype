import React from "react";
import SensorComponent, {
  SensorComponentProps,
} from "../components/SensorComponent";
import { Building } from "../types";
import { encryptProcess, requestBodyEncrypt } from "../utils/ARIAUtils";
import _ from "lodash";
import axios from "axios";

interface SensorContainerProps extends SensorComponentProps {
  building: Building;
  name: string;
}

function SensorContainer(props: SensorContainerProps) {
  const [requestJson, setRequestJson] = React.useState<string | null>(null);
  const [responseJson, setResponseJson] = React.useState<string | null>(null);

  React.useEffect(() => {
    setInterval(async () => {
      console.log(
        `* ---- building name: ${props.building.name} ${props.building.ho}, sensor title: ${props.title} save start ---- *`
      );
      const information = props.includeSensors.reduce(
        (acc, cur) =>
          cur.dataRange
            ? {
                ...acc,
                [cur.jsonId]:
                  Math.round(
                    Math.random() * (cur.dataRange[1] - cur.dataRange[0]) * 1000
                  ) *
                    0.001 +
                  cur.dataRange[0],
              }
            : acc,
        {}
      );

      const requestJson = {
        building: props.building,
        sensor: {
          name: props.name,
        },
        information,
      };
      setRequestJson(JSON.stringify(requestJson, null, "\t"));

      const bodyStr = JSON.stringify(requestJson);
      const encBodyStr = encryptProcess(bodyStr);

      try {
        const result = await axios.post(
          "http://localhost:8080/admin/humanData",
          {
            encryptBody: encBodyStr,
          },
          {
            headers: {
              authorization: process.env.REACT_APP_REQUEST_ADMIN_KEY!,
              "Request-Encrypt": "community",
              "Response-Encrypt": "community",
            },
          }
        );
        setResponseJson(result.data["encryptBody"]);
      } catch (err) {
        setResponseJson("error!");
      }
    }, props.interval * 1000);
  }, [props]);

  return (
    <SensorComponent
      {...props}
      requestJson={requestJson}
      responseJson={responseJson}
    />
  );
}

export default SensorContainer;
