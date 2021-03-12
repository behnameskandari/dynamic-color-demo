import { useState, useEffect } from "react"
import Style from "style-it";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.scss';

function App() {
  const [selectedColors, setSelectedColors] = useState({
    primaryColor: "#4a148c",
    secondaryColor: "#ff80ab",
    inputColor: "#000",
    inputBgColor: "#ffff",
    inputBorderColor: "#000",
    btnPrimaryBg: "#4a148c",
    btnPrimaryFg: "#ffff",
    btnSecondaryBg: "#ffff",
    btnSecondaryFg: "#4a148c",
    btnSecondaryBorder: "#4a148c",
  })

  useEffect(() => {
    console.log(selectedColors)
  }, [selectedColors])
  const colors = [
    {
      name: "color group 1",
      colors: {
        primaryColor: "#4a148c",
        secondaryColor: "#ff80ab",
        inputColor: "#000",
        inputBgColor: "#fff",
        inputBorderColor: "#000",
        btnPrimaryBg: "#4a148c",
        btnPrimaryFg: "#fff",
        btnSecondaryBg: "#fff",
        btnSecondaryFg: "#4a148c",
        btnSecondaryBorder: "#4a148c",
      }
    },
    {
      name: "color group 2",
      colors: {
        primaryColor: "#ff4081",
        secondaryColor: "#880e4f",
        inputColor: "#ff4081",
        inputBgColor: "#fff",
        inputBorderColor: "#ff4081",
        btnPrimaryBg: "#ff4081",
        btnPrimaryFg: "#fff",
        btnSecondaryBg: "#fff",
        btnSecondaryFg: "#ff4081",
        btnSecondaryBorder: "#ff4081",
      }
    }, {
      name: "color group 3",
      colors: {
        primaryColor: "#c62828",
        secondaryColor: "#6a1b9a",
        inputColor: "#c62828",
        inputBgColor: "#fff",
        inputBorderColor: "#c62828",
        btnPrimaryBg: "#c62828",
        btnPrimaryFg: "#fff",
        btnPrimaryBorder: "#c62828",
        btnSecondaryBg: "#fff",
        btnSecondaryFg: "#c62828",
        btnSecondaryBorder: "#c62828",
      }
    }
  ]

  const renderStyles = () => {
    return <Style>
      {
        `
                    :root {
                      --primary-color: ${selectedColors.primaryColor};
                      --seondary-color: ${selectedColors.secondaryColor};
                      --input-bg-color: ${selectedColors.inputColor};
                      --input-fg-color: ${selectedColors.inputBgColor};
                      --input-border-color: ${selectedColors.inputBorderColor};
                      --primary-btn-bg-color: ${selectedColors.btnPrimaryBg};
                      --primary-btn-fg-color: ${selectedColors.btnPrimaryFg};
                      --primary-btn-border-color: ${selectedColors.btnPrimaryBorder};
                      --seondary-btn-bg-color: ${selectedColors.btnSecondaryBg};
                      --seondary-btn-fg-color: ${selectedColors.btnSecondaryFg};
                      --seondary-btn-border-color: ${selectedColors.btnSecondaryBorder};
                    }
                      `
      }
    </Style>
  }
  const renderButtons = () => {
    return colors.map(e => {
      return <button onClick={i => setSelectedColors(e.colors)} className="btn m-5 btn-primary">{e.name}</button>
    })
  }
  return (
    <div className="row">
      {renderStyles()}

      <div className="col-md-6">
        <h1 className="m-5">
          This an example for colors
        </h1>
        {renderButtons()}
      </div>
      <div className="col-md-6 p-5">
        <form>
          <div className="form-group">
            <label>Label color</label>
            <input className="form-control" type="text" ></input>
          </div>
          <div className="form-group">
            <label>Label color</label>
            <input className="form-control" type="text" ></input>
          </div>
          <div className="form-group">
            <label>Label color</label>
            <input className="form-control" type="text" ></input>
          </div>
          <div className="form-group">
            <label>Label color</label>
            <input className="form-control" type="text" ></input>
          </div>
          <div className="form-group">
            <label>Label color</label>
            <input className="form-control" type="text" ></input>
          </div>
          <div className="form-group">
            <button className="btn btn-secondary" >Secondary Button</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
