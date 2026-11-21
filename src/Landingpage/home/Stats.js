import React from "react";

function Stats() {
  return (
    <div className="container mt-5 p-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="mb-5 fs-2">Trust the confidence</h1>
          <h4 className="mt-4 fs-4">Customer-first always</h4>
          <p className="text-muted">
            That's why 13+ crore customers trust Zerodha with 3.5+ lakh croses
            worth of equality investments.
          </p>
          <h4 className="mt-4 fs-4">Customer-first always</h4>
          <p className="text-muted">
            That's why 13+ crore customers trust Zerodha with 3.5+ lakh croses
            worth of equality investments.
          </p >
          <h4 className="mt-4 fs-4">Customer-first always</h4>
          <p className="text-muted">
            That's why 13+ crore customers trust Zerodha with 3.5+ lakh croses
            worth of equality investments.
          </p>
          <h4 className="mt-4 fs-4">Customer-first always</h4>
          <p className="text-muted">
            That's why 13+ crore customers trust Zerodha with 3.5+ lakh croses
            worth of equality investments.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="Stats image"
            style={{ width: "90%" }}
          ></img>
          <div className="text-center p-5">
            <a href="#" className = "mx-5" style ={{textDecoration:"none"}}>
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </a>

            <a href="#"  style ={{textDecoration:"none"}}>
              Try kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
