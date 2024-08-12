import { TEAM_4_PRODUCT } from "@/app/constants/4";
import Info from "../../../components/otcinfo/Info";


export default function OTCInfo4() {
    return (
      <Info products = {TEAM_4_PRODUCT} link = {"/team/4/case"}/>
    );
}