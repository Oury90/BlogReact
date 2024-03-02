import "./service.css";
import Box from "./box";
import dataEntry from "../../data";


function getData(data){
    return (
      <Box 
        title= {data.title}
        content= {data.content}
      />
    )
}


function Servcice(){
    return(
        <div className="container-service">
            <h2>Our Services</h2>
            <div className="container-box">
                {dataEntry.map(getData)}
            </div>
        </div>
    )
}
export default Servcice;