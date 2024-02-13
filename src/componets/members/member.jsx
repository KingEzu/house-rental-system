import React from "react";
import './member.css'
import ezana from '../../Images/Ezana.JPG'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css'


const Member = () => {

    const  clients =[{
            img: ezana,
            Name: "Ezana Mulugeta",
            doi: "Frontend designer",
            review:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos perferendis dolore iure ullam dignissimos officia magni ea a, cumque \n natus nulla voluptas iusto sapiente? Sed, dolor esse. Incidunt, repellat!"

        },
        {
            img: ezana, 
            Name: "Ezana Mulugeta",
            doi: "Frontend designer",
            review:
               " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos perferendis dolore iure ullam dignissimos officia magni ea a, cumque natus nulla voluptas iusto sapiente? Sed, dolor esse. Incidunt, repellat!"

        },
        {
            img: ezana,
            Name: "Ezana Mulugeta",
            doi: "Frontend designer",
            review:
               " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos perferendis dolore iure ullam dignissimos officia magni ea a, cumque natus nulla voluptas iusto sapiente? Sed, dolor esse. Incidunt, repellat!"

        },
        {
            img: ezana,
            Name: "Ezana Mulugeta",
            doi: "Frontend designer",
            review:
               " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos perferendis dolore iure ullam dignissimos officia magni ea a, cumque natus nulla voluptas iusto sapiente? Sed, dolor esse. Incidunt, repellat!"

        },
        {
            img: ezana,
            Name: "Ezana Mulugeta",
            doi: "Frontend designer",
            review:
               " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos perferendis dolore iure ullam dignissimos officia magni ea a, cumque natus nulla voluptas iusto sapiente? Sed, dolor esse. Incidunt, repellat!"

        },
        {
            img: ezana,
            Name: "Ezana Mulugeta",
            doi: "Frontend designer",
            review:
               " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos perferendis dolore iure ullam dignissimos officia magni ea a, cumque natus nulla voluptas iusto sapiente? Sed, dolor esse. Incidunt, repellat!"

        },
       
    ]
 
   
    return(
    <div className="Member-wrapper" >
        <div className="Member-heading">


        <span class="tit">Staff</span>

        <div className="blur t-blur1" style={{ background: "purple"}}></div>
        <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        </div>
        {/*slider*/}
        <Swiper

            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}

        
        
        >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}   
                    >
                        <div className="test">
                        <img src={client.img} alt="" />
                        <h1 className="Name-member">{client.Name}</h1>
                        <p className="type-of-work">{client.doi}</p>
                        <span className="siwspan">{client.review}</span>

                        </div>
                
                        
                    </SwiperSlide>
                );
            })}
        


       </Swiper>
    </div>


);
}
export default Member;
