// React Imports
import React, { Component } from "react";

// Redux Imports
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSliderImages } from "../../redux/actions/avengerActionCreator";

// Stylesheet Imports
import styles from "./index.module.css";


// Component Imports
import Slider from "../Slider";
import Title from "../Title";



class Home extends Component {
  componentDidMount = () =>{
    const {fetchSliderImages} = this.props;
    fetchSliderImages();
  }

  render() {
    const { avenger } = this.props;
    if(avenger.loading){
      return "loading";
    }
    if (!avenger.loading && !avenger.data){
      return "No Data Found"
    }
    if (!avenger.loading && avenger.data) {
      let images = avenger.data;
      return (
        <div className={styles.App}>
          <Title title={process.env.REACT_APP_TITLE} />
          <div>
            <Slider images={images} />
          </div>
        </div>
      );
    }
    
    
  }
}

const mapStateToProps = state => {
  return {
    avenger: state.avengerReducer.avengers
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSliderImages
    },
    dispatch
  );

export default 
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);

