import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [isDistributor, setIsDistributor] = useState(false);

  const handleDistributorChange = (e) => {
    setIsDistributor(e.target.value === 'Yes');
  };

  return (
    <>
      <div className="banner-bar">
        <div className="container-fluid">
          <div className="banner-content">
            <h1>Register</h1>
            <ul className="location">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register" className="active">Register</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <section className="contents">
        <div className="content-bar">
          <div className="container">
            <div className="reg-form-box">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Mobile No.</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email ID</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Are you a distributor of Amulya?</label>
                    <select
                      className="form-control"
                      onChange={handleDistributorChange}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>

              {isDistributor && (
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Distributor ID</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                </div>
              )}

              {!isDistributor && (
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                </div>
              )}

              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label className="label-check">
                      <input type="checkbox" />
                      I agree to the <a>Terms & Conditions</a>.
                    </label>
                  </div>
                </div>
              </div>

              <input type="submit" value="Register" className="btn btn-sub" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
