import React from 'react';

const Spinner = props =>{
    return (
        <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
</div>
    );
};
//setting default props value for 'message' attribute
Spinner.defaultProps ={
    message: 'Loading'
};


export default Spinner;