import React from "react";
import SensorComponent, {
  SensorComponentProps,
} from "../components/SensorComponent";
import { Building } from "../types";
import { requestBodyEncrypt } from "../utils/ARIAUtils";
import _ from "lodash";
import axios from "axios";

interface SensorContainerProps extends SensorComponentProps {
  building: Building;
  name: string;
}

function SensorContainer(props: SensorContainerProps) {
  const [requestJson, setRequestJson] = React.useState<string | null>(null);

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

      const encryptJson = _.cloneDeep(requestJson);
      requestBodyEncrypt(encryptJson);

      // console.log(encryptJson);
      const result = await axios.post(
        "http://localhost:8080/admin/humanData",
        encryptJson,
        {
          headers: {
            authorization: process.env.REACT_APP_REQUEST_ADMIN_KEY!,
          },
        }
      );
      console.log(result);
    }, props.interval * 1000);
  }, [props]);

  return <SensorComponent {...props} requestJson={requestJson} />;
}

export default SensorContainer;
