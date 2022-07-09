//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Proptypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";


function SimpleCounter(props){
return(
<div className="BigCounter">
    <div className="calendar">
        <i className="far fa-clock"></i>
    </div>
<div className="Four">{props.digitFour % 10}</div>
<div className="Three">{props.digitThree % 10}</div>
<div className="dos">{props.digitTwo % 10}</div>
<div className="uno">{props.digitOne % 10}</div>
</div>
);
}
SimpleCounter.propTypes={
digitFour: Proptypes.number,
digitThree: Proptypes.number,
digitTwo: Proptypes.number,
digitOne: Proptypes.number
};

let counter=0;
setInterval(function(){
    const four=Math.floor(counter/1000);
    const three=Math.floor(counter/100);
    const two=Math.floor(counter/10);
    const one=Math.floor(counter/1);

    ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, document.querySelector("#app"));

counter++;
},1000)

