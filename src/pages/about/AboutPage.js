import Card_E from "../../components/cards/Card_E";
import axios from "axios";
import { useEffect, useState } from "react";

function AboutPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    //initial form load
    getlist();
  }, []);
  const server = "http://localhost:8081/api/";
  const getlist = () => {
    // arrow function
    axios({
      url: server + "employee", //url api
      method: "get",
      data: "",
    })
      .then((res) => {
        //api response
        var data = res.data;
        console.log(data);
        setList(data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
     
      {list.map((item, index) => {
        console.log(item);
        return (
          <div key={index}>
            <div className="bg-red-400  h-[300px] gap-4 m-4 ">
              <h1>
                name : {item.firstname} {item.lastname}
              </h1>
              <h1>tell : {item.tel}</h1>
              <h1>emai : {item.email}l</h1>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default AboutPage;


