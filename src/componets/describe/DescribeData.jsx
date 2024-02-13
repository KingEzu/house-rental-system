
import "./Describe.css";

const DescribeData = (props) => {

  return (
    <div className="d-card">
      <div className="d-image">
      <h4 className="heading-Describe">{props.heading}</h4>
        <img src={props.image} alt="opps" />
      
      </div>
       
      
    </div>
  );
};


export default DescribeData;
