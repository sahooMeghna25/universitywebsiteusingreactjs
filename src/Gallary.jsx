/*import React, {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import img1 from "../src/Image/img1.jpg";
import img2 from "../src/Image/img2.jpg";
import img3 from "./Image/img3.jpg";
import img4 from "./Image/img4.jpg";
import img5 from "./Image/img5.jpg";
import img6 from "./Image/img6.jpg";
import img7 from "./Image/img7.jpg";
import img8 from "./Image/img8.jpg";
import dean from "./Image/dean.jpg";

const Gallary=()=>{
let data=[

{
    id:1,
    imgSrc: {img1},
},
{
    id:2,
    imgSrc: {img2},
},
{
    id:3,
    imgSrc: {img3},
},

{
    id:4,
    imgSrc: {img4},
},
{
    id:5,
    imgSrc: {img5},
},
{
    id:6,
    imgSrc: {img6},
},
{
    id:7,
    imgSrc: {img7},
},
{
    id:8,
    imgSrc: {img8},
},

{
    id:9,
    imgSrc: {dean},
}


]
 const [state, setstate] = useState(false);
 const [image, setImg] = useState()
const getImg=(imgSrc)=>{
setImg(imgSrc);
setstate(true);

}
return(
<>
<div className={state? "state open" : "state"}>
<img src={setImg}/>
<CloseIcon onClick={()=>setstate(false)} />
</div>
<header>IMAGE GALLARY</header>
<div className="gallary">
{data.map((data,index)=>{
    return(
        <div className="pics" key={index} onClick={()=> getImg(data.imgSrc)}>
        <img src={index.imgSrc} style={{width: '100%'}}/>
        </div>
    )
})}

</div>

</>

);

};
export default Gallary;*/