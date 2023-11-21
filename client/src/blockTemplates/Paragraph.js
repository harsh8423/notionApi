import React from "react";
import "./Paragraph.css";
import Page from "../pageTemplates/Page";
import bulb from "../images/light-bulb.png"

export default function Paragraph(props) {
  const { text,id, callout } = props;

  return (
    <div className="col-12 mt-2 para">
      {text?.map((block) => {
        const annotations = block.annotations;

        // Check if the string ends with "_background"
        const isBackground = annotations.color.endsWith("_background");
        const islink = block?.href

        var color=null
        // Extract the color based on the presence of "_background"
        if(isBackground){
          
          color = isBackground
            ? annotations.color.slice(0, -11) // Remove "_background" from the end
            : annotations.color;
        }else if(callout){
          color=callout.slice(0, -11)
        }

        // Individual styles for each text block
        const blockStyle = {
          textDecoration: annotations.underline || islink ? "underline" : "",
          color: isBackground|| callout ? "" : color,
          backgroundColor: isBackground ||callout ? `light${color}`:"",
          fontWeight: annotations.bold ? "bold" : "",
          borderLeft: props.quote? "4px solid black":"",
          paddingLeft: props.quote? "15px":"",
          padding:callout? "10px":"",
          borderRadius: callout? "5px":"",
        };

        return (
          <span className="paraout" style={blockStyle} key={block.id}>
            {callout? <img className='m-2' key={id} style={{marginLeft:"10px"}} width={18} height={18} src={bulb} alt='no image'/>:""}
            {islink? <a href={islink}>{block.plain_text}</a> : block.plain_text}
          </span>
        );
      })}
      {id!=null && <Page id={id} paged={true}/>}
    </div>
  );
}
