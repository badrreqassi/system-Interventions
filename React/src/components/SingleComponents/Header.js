import React from "react";

function Header() {
  return (
    <header>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to={0}
            className="active"
          />
          <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
          <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="assets/images/nature1.jpg"
              alt="Los Angeles"
              className="d-block text-center"
              id="imgHeader"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/nature2.jpg"
              alt="Chicago"
              className="d-block"
              id="imgHeader"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/nature3.jpg"
              alt="Chicago"
              className="d-block"
              id="imgHeader"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
