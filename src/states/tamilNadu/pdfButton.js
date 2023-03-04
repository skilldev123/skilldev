import ReactToPrint from "react-to-print";
import DataComponent from "./pdfData";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const navigate = useNavigate();
    const token = localStorage.getItem("jwt");

    useEffect(() => {
      if (!token) {
        navigate("/");
      }
    }, [navigate, token]);

    if (!token) {
      return null;
    }

    return <Component {...props} />;
  };
}

class PdfComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 15,
      message: "Loading data please wait for... 15 seconds",
      buttonDisabled: true,
    };
  }

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      if (this.state.timer === 0) {
        clearInterval(this.timerInterval);
        this.setState({ message: "", buttonDisabled: false });
      } else {
        this.setState((prevState) => ({
          timer: prevState.timer - 1,
          message: `Loading data please wait for... ${prevState.timer} seconds`,
        }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }
  handleGoBack = () => {
    window.history.back();
  };
  render() {
    return (
      <div>
        <ReactToPrint
          content={() => this.componentRef}
          trigger={() => (
            <Button className="btt" disabled={this.state.buttonDisabled}>
              Print to PDF!
            </Button>
          )}
        />
        <div className="mesgg">{this.state.message}</div>
        <Button className="home-button" onClick={this.handleGoBack}>
          Go Back!
        </Button>
        <div className="inv">
          <DataComponent ref={(response) => (this.componentRef = response)} />
        </div>
      </div>
    );
  }
}

export default withAuth(PdfComponent);
