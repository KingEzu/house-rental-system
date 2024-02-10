import React from "react"
import "./Describe.css"
import DescribeData from "./DescribeData"
import codomipic from'../../Images/condominium.jpg'
import vilapic from'../../Images/vila.jpg'
import officepic from '../../Images/office.jpg'
import commercialpic from '../../Images/commercial1.jpg'
import sharedpic from '../../Images/shared.jpg'
import landpic from '../../Images/LANDRENT.jpg'
import wholebldg from '../../Images/commercial.jpg'

import apartmentpic from '../../Images/Apartment.jpg'
const Describe = () =>{
    return(
        <div className="describe">
            <h1>For Rent in Addis</h1>
            <div className="decard">
                <div className="d-row"> {/* This is the first row of 2 cards */}
                    <DescribeData
                    image={apartmentpic}
                    heading = "Apartment"
                    />
                    <DescribeData
                    image={vilapic}
                    heading = "vila"
                    />
                </div>
                <div className="d-row"> {/* This is the second row of 2 cards */}
                 
                    <DescribeData
                    image={codomipic}
                    heading = "Condominium"
                    />
                    <DescribeData
                    image={officepic}
                    heading = "Office"
                    />
                </div>
                <div className="d-row"> {/* This is the third row of 2 cards */}
                    <DescribeData
                    image={commercialpic}
                    heading = "Commercial"
                    />
                    <DescribeData
                    image={sharedpic}
                    heading = "Shared Rooms"
                    />
                </div>
                <div className="d-row"> {/* This is the fourth row of 2 cards */}
                    <DescribeData
                    image={landpic}
                    heading = "Lands"
                    />
                    <DescribeData
                    image={wholebldg}
                    heading = "Building "
                    />
                </div>
            </div>
        </div>
  
    );
}
export default Describe;
