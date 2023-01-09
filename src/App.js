import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="mainDiv">
        <nav className="navEle">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              className="imgCon"
              alt="app logo"
            />
          </div>
        </nav>

        <div className="SubCon">
          <div className="FirstCon1">
            <form className="formCon">
              <h1>Add New Password</h1>
              <div className="inou">
                <div className="flexKaro">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                    className="asp"
                    alt="website"
                  />
                </div>
                <input
                  type="text"
                  className="inpu"
                  placeholder="Enter Website"
                />
              </div>
              <div className="inou">
                <div className="flexKaro">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    className="asp"
                    alt="username"
                  />
                </div>
                <input
                  type="text"
                  className="inpu"
                  placeholder="Enter Username"
                />
              </div>
              <div className="inou">
                <div className="flexKaro">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    className="asp"
                    alt="password"
                  />
                </div>
                <input
                  type="text"
                  className="inpu"
                  placeholder="Enter Password"
                />
              </div>
              <div className="btn">
                <button type="submit" className="btut">
                  Add
                </button>
              </div>
            </form>

            <div className="imgManagerCon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
                className="managerImg"
                alt="password manager"
              />
            </div>
          </div>
          <div className="secondsCon">
            <div className="firstSubCon">
              <div className="dsfjk">
                <h1 className="h11">Your Passwords</h1>
                <p>count</p>
              </div>

              <div className="inoutele">
                <div className="inoutel">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    className="searchImgCon"
                    alt="search"
                  />
                </div>
                <input type="search" />
              </div>
            </div>

            <hr className="hrr" />
            <div className="oasswordCon">
              <input id="checkN-Box" type="checkbox" />
              <label htmlFor="checkN-Box">Show Passwords</label>
            </div>

            <div className="lastCon">
              <div className="cardCon">
                <div className="initial">
                  <h1>Y</h1>
                </div>
                <div className="flextoColumn">
                  <p>Youtbe</p>
                  <p>Ussername</p>
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                      className="imgstars"
                      alt="stars"
                    />
                  </div>
                </div>
                <div className="initial">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                    className="imgstars"
                    alt="delete"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
