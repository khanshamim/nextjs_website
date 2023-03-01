import Head from "next/head";
import { useState, useRef } from "react";

export default function Donate() {
  const [email, setEmail] = useState(undefined);
  const [mobile, setMobile] = useState(undefined);
  const [custId, setCustId] = useState(undefined);
  const [txToken, setToken] = useState(undefined);
  const [mid, setMid] = useState(undefined);
  const [orderId, setOrderId] = useState(undefined);
  const [gotRes, setGotRes] = useState(false);

  const handleformSubmit = (e) => {
    e.preventDefault();

    let data = {
      custId: custId,
      mobile: mobile,
      email:email
    };

    console.log(data);
    fetch("/api/paynow", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setToken(data.token);
        setMid(data.mid);
        setOrderId(data.orderId);
        setGotRes(true);
        document.getElementById("redFrom").submit();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      
      <div className="container">
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <center style={{ display: gotRes ? "block" : "none" }}>
              <h1>Please do not refresh this page...</h1>
            </center>
            <form
              onSubmit={handleformSubmit}
              style={{ display: gotRes ? "none" : "block" }}
            >
              <label htmlFor="lastName" className="for">
                Customer ID :
              </label>
              <input
                className="form-control"
                type="text"
                name="custId"
                value={custId}
                onChange={(e) => setCustId(e.target.value)}
              />

              <label htmlFor="lastName" className="for">
                Mobile :
              </label>
              <input
                className="form-control"
                type="text"
                maxLength="10"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />

              <label htmlFor="lastName" className="for">
                Email :
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <button type="submit" className="btn btn-success">
                Pay
              </button>
            </form>

            <Hiddenfrom mid={mid} orderId={orderId} token={txToken} />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

const Hiddenfrom = (props) => {
  return (
    <div>
      <form
        id="redFrom"
        method="post"
        action={
          "https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=" +
          props.mid +
          "&orderId=" +
          props.orderId
        }
        name="paytm"
      >
        <input type="hidden" name="mid" value={props.mid} />
        <input type="hidden" name="orderId" value={props.orderId} />
        <input type="hidden" name="txnToken" value={props.token} />
      </form>
    </div>
  );
};