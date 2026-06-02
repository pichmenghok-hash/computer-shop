// import product from "./../../components/data/product";
import { useState } from "react";
import { Card } from "react-bootstrap";
function HomePage() {
  const [name, setMyName] = useState("Menghok");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState(20);
  const onChangeInfo = () => {
    setMyName("Menghok");
    setAge("22");
    setGender("Male");
  };

  const onChangePassword = (event) => {
    setMyName(event.target.value);
  };
  return (
    <div>
      {/* <h1 className="text-green-800 text-4xl flex justify-center">Home Page</h1>
         {product.map((item,index)=>(
            <div key={index} style={{padding: 20, backgroundColor: "red", marginTop:20}}>
                <div>{item.name}</div>
                
            </div>
           
         ))} */}
      <div>
        <h1> React State & Component Menghok</h1>
        <h1> Name: {name} </h1>
        <h1> Gender: {gender} </h1>
        <h1> Age: {age} </h1>
        <button
          className=" p-[10px] bg-cyan-400 rounded-s"
          onClick={onChangeInfo}
        >
          Chage User info
        </button>

        <input
          className="rounded-s border-gray-200 p-[10px]"
          placeholder="Change my name"
          onChange={onChangePassword}
        />
        <Card />
      </div>
    </div>
  );
}
export default HomePage;
