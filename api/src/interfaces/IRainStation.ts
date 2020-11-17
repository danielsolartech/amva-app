import ICoord from "./ICoord";
import { Moment } from "moment";

interface IRainStation extends ICoord {
    name: string;
    code: number;

    city: string;
    commune: string;
    neighborhood: string;
    basin: string;

    p10m: number;
    p1h: number;
    p24h: number;

    date: Moment;
}

export default IRainStation;