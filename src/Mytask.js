import axios from "axios";
import IMAGEE from "./img/1.jpg";
import IMAGEE1 from "./img/2.png";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function Mytask() {
  const [file, setFile] = useState(null);
  const [name, setname] = useState("");
  const [data,setdata]=useState("");
  // const [background,setbackground]=useState("")
  // const [post,setpost]=useState("")
  // const [created_at,setcreated_at]=useState("")


const items={username,post,background};

  

   function onupload(e) {
   
    
    const url = "http://139.59.47.49:4004/api/upload/image";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response);
      axios
        .post("http://139.59.47.49:4004/api/post", {
          post: name,
          background: response.data.filename,
        })
        .then((res) => {
          console.log(res);
        });
    });
      // let data={username,post,background,created_at};
      axios.get('http://139.59.47.49:4004/api/posts?limit=20&start=1&orderby=0')
      .then((resp)=>{
        setdata(data);
        console.log(resp);
        
        
      })
      

   
  }
  return (
    <div className="container shadow p-3 mb-5 bg-body rounded rounded p-2">
      <div class="card mb-3">
        <img src={IMAGEE} class="card-img-top " height={250} alt="..." />
        <div class="card-body">
          <img src={IMAGEE1} class="img1" height={100} alt="" />
          <h3>Jurry Luis </h3>
          <hr />
          <h4 class="text-primary">Timeline</h4>
        </div>
      </div>
      <div class="container shadow p-3 mb-5 bg-body rounded bg-white">
        <div class="row">
          <div class="col-sm-4  text-center">
            <img src={IMAGEE1} width={50} alt="" />
          </div>
          <div class="col-sm-8 text-end">
            <input
              type="text"
              class="form-control"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              placeholder="What's on your mind?"
              aria-label="Username"
            />
            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog ">
                <div class="modal-content">
                  <div class="modal-header text-center">
                    <h5 class="modal-tittle">Create Post </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="col-sm-4 text-center p-2">
                      <img src={IMAGEE1} height={20} alt="" />
                      <span className="p-2">Jurry Luis</span>
                    </div>
                    <div id="image-upload" class="shadow  bg-body rounded">
                      <input type="text" value={name} onChange={(e) => setname(e.target.value)}  class="text-center"/>
                      <img
                        src={file ? URL.createObjectURL(file) : ""}
                        class="w-100 h-100 border-0 text-dark"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      id="input-image"
                      accept="image/*"
                      class="btn btn-success w-100"
                    />
                    <button type="button" onClick={onupload} class="btn btn-success w-100" data-bs-dismiss="modal">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container shadow p-3 mb-5 bg-body rounded bg-white">
        <div className="row">
          <div className="col-sm-4 ">
            <h1>POST</h1>
          </div>
          <div className="col-sm-8 p-2 text-end">
            <button
              class="btn bg-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Fillter
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Post filter
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="text-center">
                      <h6>Use filter to find Post on your timeline. </h6>
                      <p>This will not effect how other see your Timeline</p>
                      <span>
                        Go To:
                        <input type="date" />
                      </span>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary w-100"
                      data-bs-dismiss="modal"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      


      <div className="container shadow p-3 mb-5 bg-body rounded text-start mt-5 bg-white">
        <div className="row">
          <div className="col-sm-4 text-center  p-2">
            <img src={IMAGEE1} height={50} alt="" />
            <span className="p-2">jarry Goan</span>
          </div>
          <div className="col-sm-8 text-end ">
            <h1>......</h1>
          </div>
        </div>
        <h4 className="centered"></h4>
        <img src={data.background} class="w-100 rounded p-2" height={250} alt="" />
      </div>
         
        


    
    </div>
  );
}