import './SeasonDisplay.css';
import React from 'react';

// custom method to get text and iconname based on season type
 const seasonConfig = {
winter : {
    text: "Its Winter time!",
    iconName: 'snowflake'
},
summer : {
    text: "Its summer lets hit the beach",
    iconName: 'sun'
}
 };
//custom method to get season based on latitude and month
 const getSeason =(lat, month) => {
    if(month > 2 && month <9){
        return lat > 0 ?  'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
 };
// main object method
 const SeasonDisply = props =>{
     //getting season
     const season = getSeason(props.lat, new Date().getMonth);
     //getting text and iconname based on returned season type
     const {text, iconName} = seasonConfig[season];

     return(
        <div className={`season-display ${season}`}>
        <i className= {`icon-left massive ${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}/>
        </div>
     );
 };

export default SeasonDisply;