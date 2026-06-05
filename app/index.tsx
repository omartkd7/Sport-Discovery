import { Text, View  ,ImageBackground} from "react-native";
// import { HeartButton} from "../Components/HeartButton"
export default function Index() {
  return (
    
 <ImageBackground
 source={ require("../assets/sport/Background.png")} 
 style={{flex:1,
  height:"auto",
  width:"auto",
 }} >
  <Text
  style={{ 
  
    color: "red",
    
  }}
  > welcome </Text>
 </ImageBackground>
    
   

    
     
      
  );
}
