import React, { Component } from "react";

import About from "./About";
import Panel from "./Panel";
class App extends Component {
    state = {
        currentSlide: 100
    }
    
    handlePanelClick = (id) => {
        switch (id) {
            case "mattPhoto":
                this.setState({currentSlide: 200});
                    break;
            case "eddiePhoto":
                this.setState({currentSlide: 600});
                break;
            case "michaelPhoto":
                this.setState({currentSlide: 400});
                break;    
            case "chasPhoto":
                this.setState({currentSlide: 800});
                break;
            default: this.setState({currentSlide: 100});
            console.log("Bad id");
        }
    }
    
     handleAppClick = () => {
         console.log(this.state.currentSlide);
         let current = this.state.currentSlide;
         console.log(current);
        switch (this.state.currentSlide) {
            case 100:
                current = current + 100;
                this.setState({currentSlide: current});
                break;
            case 200:
                current = current + 100;
                this.setState({currentSlide: current});
                break;
            case 400:
                current = current + 100;
                this.setState({currentSlide: current});
                break;
            case 600:
                current = current + 100;
                this.setState({currentSlide: current});
                break;
            default: return (
                    console.log("handleAppClick bad case")
                    )
        }
        console.log(this.state.currentSlide);
    }
    
     render() {
        
         return (
            <div className="wrapper">
                <div className="left">
                    <div className="leftTop">
                        <h4>Our Leadership</h4>
                    </div>
                    <div className="individuals">
                        <Panel handlePhotoClick = {this.handlePanelClick}/>
                    </div>
                </div>
                <div className="center">
                    <div className="centerTop">
                        <h2 onClick={() => { this.handleAppClick()}}>Keep Pounding!</h2>
                    <About slide = {this.state.currentSlide}/>
                    </div>
                </div>
                <div className="right">
                    <div className="rightTop">
                        <h4>Our Offices</h4>
                    </div>
                    <div className="officePhoto">
                        <img id="officePicture" src="../assets/images/uncc-smaller.png" alt="SmartScout Office Building"/>
                    </div>
                    <div className="officeInfo">
                    <br></br>
                        <p>
                            320 E 9th St
                            Charlotte, NC 28202<br/>
                            At the corner of 9th and Brevard
                            Beside First Ward Park.<br/>
                            Main Switchboard<br/>
                            (704) 687-8902<br/>
                            email: info@smartscout.com
                        </p>
                    </div>
                </div>
                <div className="rightSpacer">
                    
                </div>
            </div>
            // End of wrapper
        );
    }
}     
export default App;