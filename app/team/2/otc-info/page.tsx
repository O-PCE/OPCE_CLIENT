import { TEAM_2_PRODUCT } from "@/app/constants/2";
import Info from "../../../components/otcinfo/Info";

export default function OTCInfo2() {
    return (
      <Info products = {TEAM_2_PRODUCT} link = {"/team/2/case"}/>
    );
}