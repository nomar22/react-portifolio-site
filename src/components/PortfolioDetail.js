import React from 'react';

const PortfolioDetail = (props) => (
    <div>   
       <h2>This is my work {props.match.params.id}</h2>
    </div>
);

export default PortfolioDetail;
