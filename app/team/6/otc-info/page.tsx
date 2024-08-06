import TEAM_6_PROUDCT from "@/app/constants/6/productData";
import Info from "../../../components/otcinfo/Info";

export default function OTCInfo1() {
    return (
      <Info 
        products = {TEAM_6_PROUDCT} 
        link = {"/team/6/case"} 
      />
    );
}