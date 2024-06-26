import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MusicHome(props) {
  var doOkClick = async () => {
    window.location = "/morder";
  };
  const [thedata, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    var buying_detail = async () => {
      try {
        var response = await axios.get(
          `http://localhost:3502/show-beat-data/${id}`
        );
        setData(response.data);

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    buying_detail();
  }, [id]);

  return (
    <>
      <section className="kobe" id="userdatsec">
        <h1
          style={{ color: "white", marginBottom: "unset", marginTop: "4rem" }}
        >
          您好這是您的購買資訊
        </h1>
        <table className="userdata">
          <thead>
            <tr>
              <th>姓名</th>
              <th>電話</th>
              <th>信箱</th>
              <th>beat</th>
              <th>價錢</th>
            </tr>
          </thead>
          <tbody>
            {thedata.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.phone_number}</td>
                <td>{item.email}</td>
                <td>{item.product_name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button type="button">
          <a href={"/morder"}>回上頁</a>
        </button> */}
        <input
          className="button"
          type="button"
          value="回上頁"
          onClick={doOkClick}
        />{" "}
      </section>
    </>
  );
}

export default MusicHome;
