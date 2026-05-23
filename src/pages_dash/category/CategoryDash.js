import { useEffect, useState } from "react";
import axios from "axios";
import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function CategoryDash() {
  const [name, setName] = useState("");
  const [lastname, setLastName]= useState("");
  const [tell, setTell] = useState("");
  const [email, setEmail] = useState("");
  const [list, setList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});

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

  const onDelete = (id) => {
    setShow(false);
    var employee_id = item.employee_id;
    axios({
      url: server + "employee/" + employee_id, //url api
      method: "delete",
    })
      .then((res) => {
        getlist();
        //remove a record in clients table
        var tmp_data = list.filter((item) => item.employee_id !== id);
        setList(tmp_data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onClickBtnDelete = (param) => {
    setItem(param);
    setShow(true);
  };
  const onHideModal = () => {
    setShow(false);
    
   
  };
  // new
  const onHideModalForm = () => {
    setShowForm(false);  
    ClearForm();
    item.employee_id=null;
    
  };
  const ClearForm = () => {
    setName("");
    setLastName("");
    setTell("");
    setEmail("");
  }
  const onSave = () => {
    var param = {
      "firstname": name,
      "lastname":lastname,
      "tel": tell,
      "email": email,
      "base_salary": null,
      "address": null,
      "province": null,            
      "country": null
    }
  // case updates
  var url = server + "employee";
  var method = "post"
  if(item.employee_id){
    param.employee_id = item.employee_id; // add new key "employee_id" to param
    
    method = "put";
  }
    axios({
      url: url,
      method: method,
      data: param,  
    }).then(res => {
      if(res){
        getlist();
        onHideModalForm();
        ClearForm();
      }
    })

   

  };
  const onShowModalForm = () => {
    setShowForm(true);
  };

  const onEdit = (item) => {
    setName(item.firstname);
    setLastName(item.lastname);
    setEmail(item.email);
    setTell(item.tel);
    setShowForm(true);
    setItem(item);
    axios({
      url: server + "employee/", //url api
      method: "put",
    })
      .then((res) => {
       
        getlist();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-5">
      <div className="flex justify-between p-[10px]">
        <h1>List employee</h1>
        <button
          onClick={onShowModalForm}
          className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          New +
        </button>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-auto text-sm text-left rtl:text-right text-gray-500  dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className=" py-3 px-20">
                Employee id
              </th>
              <th scope="col" className=" py-3 px-20">
                Name
              </th>

              <th scope="col" className=" py-3 px-20">
                Tell
              </th>
              <th scope="col"   className=" py-3 px-20">
                Email
              </th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {list.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="even:bg-gray-100 odd:bg-white-100   border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.employee_id}
                  </td>

                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.firstname + " " + item.lastname}
                  </td>

                  <td className="px-6 py-4">{item.tel}</td>

                  <td className=" py-4">{item.email}</td>
                  <td className="pt-2 flex">
                    <button
                      onClick={() => onEdit(item)}
                      type="button"
                      className="mx-1 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm py-2.5 text-center mb-2 w-20 y-10"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onClickBtnDelete(item)}
                      type="button"
                      className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm  py-2.5 text-center  mb-2 w-20 y-10 "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal show={show} onHide={onHideModal}>
            <Modal.Header closeButton>
              <Modal.Title>Delete</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Are you sure! </p>
              <br />
              <p>Do yo want to delete?</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={onHideModal}>
                Cancell
              </Button>
              <Button
                variant="danger"
                onClick={() => onDelete(item.employee_id)}
              >
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        {/* create new category */}
        <div className="modal show" style={{ position: "initial" }}>
          <Modal show={showForm} onHide={onHideModalForm}>
            <Modal.Header closeButton>
              <Modal.Title>{item.employee_id == null ? "Create New Employee" : "Update"}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <form class="max-w-sm mx-auto">
              
                <div className="mb-3">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name :</label>
                    <input placeholder="firstname" 
                           value={name}
                           onChange={(event)=>{
                             setName(event.target.value)
                           }}
                    type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                {/* last name */}
                <div className="mb-3">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name :</label>
                    <input placeholder="Last Name"
                     value={lastname}
                     onChange={(event)=>{
                       setLastName(event.target.value)
                     }}
                    type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-3">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tell :</label>
                    <input placeholder="tell"
                     value={tell}
                     onChange={(event)=>{
                       setTell(event.target.value)
                     }}
                     type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-3">
                    
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
                    <input placeholder="email"
                    type='email'
                     value={email}
                     onChange={(event)=>{
                       setEmail(event.target.value)
                     }}
                     id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                
               
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onHideModalForm}>
                Cancel
              </Button>
              <Button variant="danger" onClick={onSave}>
                {item.employee_id == null ? 'Create':'Update'}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default CategoryDash;
