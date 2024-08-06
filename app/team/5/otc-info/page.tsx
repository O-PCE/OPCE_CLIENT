import TEAM_5_PROUDCT from "@/app/constants/5/productData";
import Info from "../../../components/otcinfo/Info";

export default function OTCInfo1() {
    return (
      <Info 
        products = {TEAM_5_PROUDCT} 
        link = {"/team/5/case"} 
      />
    );
}