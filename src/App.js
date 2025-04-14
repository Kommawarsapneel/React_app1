import { ButtonElem } from "./button/button.js";
import { Image } from "./image/image.js";
import { Order_List } from "./list/list.js";
import { Card_componet } from "./card/card.js";
const App=()=>{
return(
  <div>
  <ButtonElem />
  <Image/>
  <Order_List></Order_List>
  <Card_componet></Card_componet>
  
  </div>
)
};

export default App;
