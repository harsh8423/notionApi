import React from 'react'
import "./Paragraph.css";
import Page from '../pageTemplates/Page';
export default function NumberedListItem(props) {

  const { text, id } = props;
  return (
    <div className='para col-12'>
        {text.map((block, index) => {
        const annotations = block.annotations;

        // Check if the string ends with "_background"
        const isBackground = annotations.color.endsWith("_background");

        // Extract the color based on the presence of "_background"
        const color = isBackground
          ? annotations.color.slice(0, -11) // Remove "_background" from the end
          : annotations.color;

        // Individual styles for each text block
        const blockStyle = {
          textDecoration: annotations.underline ? "underline" : "",
          color: isBackground ? "" : color,
          backgroundColor: isBackground ? color : "",
          fontWeight: annotations.bold ? "bold" : "",
        };

        return (
          <span style={blockStyle} key={block.id}>
            {block.plain_text}
          </span>
        );
      })}
      {id!=null && <Page id={id} paged={true}/>}
    </div>
  )
}
