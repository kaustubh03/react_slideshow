// React Imports
import React, { Component } from "react";
import { Image } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

// Style Imports
import styles from "./index.module.css";

// Redux Imports
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchImageUrl } from "../../redux/actions/imagesActionCreator";


// Image Import

const left = require('../../images/leftControl.png');
const right = require('../../images/rightControl.png');
const loader = require('../../images/loader.gif');


class Slider extends Component {
  state = {
    currIndex: 0
  };
  componentDidMount = () => {
    const { currIndex, fetchImageUrl } = this.state;
    let that = this;
    setInterval(function() {
      const { fetchImageUrl, images,sliderImage } = that.props;
      let nextIndex = parseInt(that.state.currIndex) + 1;
      if(nextIndex===images.length){
        nextIndex = 0;
      }
      that.setIndexState(nextIndex);

      fetchImageUrl(images[nextIndex].id);

    }, 1000);
  };
  setIndexState = nextIndex => {
    this.setState({ currIndex: nextIndex });
    
  };

  onImageChange = (type) =>{
    const { fetchImageUrl, images } = this.props;
    switch (type) {
      case "right":
        let nextIndex = parseInt(this.state.currIndex) + 1;
          if(nextIndex===images.length){
            nextIndex = 0;
          }
          this.setIndexState(nextIndex);

          fetchImageUrl(images[nextIndex].id);
        break;

      case "left":
      
        let prevIndex = parseInt(this.state.currIndex) - 1;
        if (prevIndex === -1) {
          prevIndex = images.length - 1;
        }
        this.setIndexState(prevIndex);

        fetchImageUrl(images[prevIndex].id);
        break;
      default:
        return false;
    }
  }

  render() {
    const { images, sliderImage } = this.props;
    const { currIndex } = this.state;
    console.log(sliderImage);
    return (
      <div className={`${styles.sliderContainer}`}>
        <ReactTooltip />
        <Image
          className={styles.leftControlButton}
          src={left}
          height={45}
          data-tip="Previous"
          onClick={() => {
            this.onImageChange(`left`);
          }}
        />
        {sliderImage && sliderImage.loading && (
          <Image width={1000} height={500} src={loader} />
        )}
        {sliderImage && !sliderImage.loading && sliderImage.data && (
          <Image src={sliderImage.data.url} />
        )}
        {sliderImage && !sliderImage.loading && !sliderImage.data && (
          <Image width={1000} height={500} src={loader} />
        )}
        <Image
          className={styles.rightControlButton}
          src={right}
          height={45}
          data-tip="Next"
          onClick={() => {
            this.onImageChange(`right`);
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    avenger: state.avengerReducer.avengers,
    sliderImage:state.imageReducer.images
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchImageUrl
    },
    dispatch
  );

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Slider);
