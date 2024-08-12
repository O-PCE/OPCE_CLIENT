import { TEAM_3_PRODUCT } from "@/app/constants/3";
import Info from "../../../components/otcinfo/Info";


export default function OTCInfo3() {
    return (
      <Info products = {TEAM_3_PRODUCT} link = {"/team/3/case"}/>
    );
}