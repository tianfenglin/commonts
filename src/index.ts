import * as fileshelp from "@/baseclass/files/index";
import * as jsonhelp from "@/baseclass/json/index";
import * as timehelp from "@/baseclass/time/index";
import * as httpshelp from "@/baseclass/https/index";

class ToolHelp {
  public files = fileshelp;
  public json = jsonhelp;
  public time = timehelp;
  public https = httpshelp;
}
export default ToolHelp;
