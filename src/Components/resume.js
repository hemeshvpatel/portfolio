import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import throttle from "lodash.throttle";

import myresume from "../images/myresume.pdf";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: 0,
      pageNumber: 1,
      PDFWidth: null
    };
    this.myInput = React.createRef();
  }

  componentDidMount() {
    // setting width at initial
    this.setPDFWidth();

    // event listener when window is resized
    window.addEventListener("resize", throttle(this.setPDFWidth));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", throttle(this.setPDFWidth));
  }

  setPDFWidth = () => {
    const width = this.myInput.current.offsetWidth;
    this.setState({ PDFWidth: width });
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  nextPage = () => {
    const currentPageNumber = this.state.pageNumber;
    let nextPageNumber;

    if (currentPageNumber + 1 > this.state.numPages) {
      nextPageNumber = 1;
    } else {
      nextPageNumber = currentPageNumber + 1;
    }

    this.setState({
      pageNumber: nextPageNumber
    });
  };

  render() {
    const { pageNumber, numPages, PDFWidth } = this.state;

    return (
      <div ref={this.myInput} onClick={this.nextPage}>
        <Document file={myresume} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={PDFWidth} />
        </Document>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}

export default Resume;
