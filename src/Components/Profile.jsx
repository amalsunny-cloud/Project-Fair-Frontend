import React, { useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";
import axios from "axios";

function Profile() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    github: "",
    linkedin: "",
  });

  const [retrievedUser,setRetrievedUser] = useState({})

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      console.log("Inside the getProfile function");
      const token = sessionStorage.getItem("token");
      console.log("token is:", token);

      const res = await axios.get("http://localhost:3000/getProfile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // withCredentials: true,
      });

      console.log("response data is:", res.data.user);
      setRetrievedUser(res.data.user)
      setFormData({
        github:res.data.user.github,
        linkedin:res.data.user.linkedin
      })
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      console.log("Inside the handleSubmit function frontend");
      const res = await axios.post(
        "http://localhost:3000/linkUpdate",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <div className="card shadow mt-3 p-3 me-2">
          <div className="d-flex justify-content-between">
            <h4>profile</h4>
            <button
              onClick={() => setOpen(!open)}
              className="btn btn-outline-info"
            >
              <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>

          <Collapse in={open}>
            <div className="row justify-content-center p-4">
              <label className="d-flex justify-content-center">
                <input type="file" style={{ display: "none" }} />
                <img
                  width={"50%"}
                  height={"auto"}
                  src="https://www.pngall.com/wp-content/uploads/5/User-Profile-Transparent.png"
                  alt="profile"
                />
              </label>

              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Github Link"
                  className="form-control"
                  value={formData.github}
                  onChange={handleChange}
                  name="github"
                />
                <br />
                <input
                  type="text"
                  placeholder="LinkedIn Link"
                  className="form-control"
                  value={formData.linkedin}
                  onChange={handleChange}
                  name="linkedin"
                />

                <div className="d-grid mt-5">
                  <button className="btn btn-warning" onClick={handleSubmit}>
                    Update
                  </button>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
       
      </div>
    </>
  );
}

export default Profile;
