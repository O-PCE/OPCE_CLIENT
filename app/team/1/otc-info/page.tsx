import TEAM_1_PROUDCT from "@/app/constants/1/productData";
import Info from "../../../components/otcinfo/Info";

export default function OTCInfo1() {
    return (
      <Info 
        products = {TEAM_1_PROUDCT} 
        link = {"/team/1/case"} 
        prevLink={"/team/1"}/>
    );
}