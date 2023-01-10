import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  state = {
    array: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    isChecked: false,
  }

  websiteChanged = event => {
    this.setState({website: event.target.value})
  }

  usernameChanged = event => {
    this.setState({username: event.target.value})
  }

  passwordChanged = event => {
    this.setState({password: event.target.value})
  }

  submitEventTriggerd = event => {
    event.preventDefault()
    const {website, array, username, password} = this.state
    this.setState({
      array: [
        ...array,
        {
          id: uuidv4(),
          firstName: website,
          secondName: username,
          thirdName: password,
        },
      ],
      website: '',
      username: '',
      password: '',
    })
  }

  searchTriggerd = event => {
    this.setState({searchInput: event.target.value})
  }

  getFilteredList = (array, searchInput) =>
    array.filter(eachItem => eachItem.firstName.includes(searchInput))

  checkBoxTriggerd = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  deleteButtonTriggerd = id => {
    const {array} = this.state
    this.setState({array: array.filter(eachItem => eachItem.id !== id)})
  }

  render() {
    const {
      website,
      username,
      password,
      searchInput,
      array,
      isChecked,
    } = this.state

    const filterdList = this.getFilteredList(array, searchInput)
    console.log(filterdList)
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
                  onChange={this.websiteChanged}
                  value={website}
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
                  onChange={this.usernameChanged}
                  value={username}
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
                  type="password"
                  className="inpu"
                  placeholder="Enter Password"
                  onChange={this.passwordChanged}
                  value={password}
                />
              </div>
              <div className="btn">
                <button
                  type="submit"
                  className="btut"
                  onClick={this.submitEventTriggerd}
                  value={searchInput}
                >
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
                <h1>{filterdList.length}</h1>
              </div>

              <div className="inoutele">
                <div className="inoutel">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    className="searchImgCon"
                    alt="search"
                  />
                </div>
                <input type="search" onChange={this.searchTriggerd} />
              </div>
            </div>

            <hr className="hrr" />
            <div className="oasswordCon">
              <input
                id="checkN-Box"
                type="checkbox"
                onChange={this.checkBoxTriggerd}
              />
              <label htmlFor="checkN-Box">Show Passwords</label>
            </div>

            <ul className="lastCon">
              {filterdList.map(eachItem => (
                <li className="cardCon" key={eachItem.id} id={eachItem.id}>
                  <div className="initial">
                    <h1>{eachItem.firstName.slice(0, 1).toUpperCase()}</h1>
                  </div>
                  <div className="flextoColumn">
                    <p>{eachItem.firstName}</p>
                    <p>{eachItem.secondName}</p>
                    <p>
                      {isChecked ? (
                        eachItem.thirdName
                      ) : (
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                          className="imgstars"
                          alt="stars"
                        />
                      )}
                    </p>
                  </div>
                  <button
                    className="initialbutton"
                    type="button"
                    onClick={() => this.deleteButtonTriggerd(eachItem.id)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                      className="imgstars"
                      alt="delete"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
