import React from "react";
import "../blockTemplates/Paragraph.css";
export default function Paragraph(props) {
  const { text} = props;

  return (
    <div className="col-12 mt-2 para text-center">
      {text?.map((block) => {
        const annotations = block.annotations;

        // Check if the string ends with "_background"
        const isBackground = annotations.color.endsWith("_background");
        const islink = block?.href
        // Extract the color based on the presence of "_background"
        const color = isBackground
          ? annotations.color.slice(0, -11) // Remove "_background" from the end
          : annotations.color;

        // Individual styles for each text block
        const blockStyle = {
          textDecoration: annotations.underline || islink ? "underline" : "",
          color: isBackground ? "" : color,
          backgroundColor: isBackground ? color : "",
          fontWeight: annotations.bold ? "bold" : "",
        };

        return (
          <span  style={blockStyle} key={block.id}>
            {islink? <a href={islink}>{block.plain_text}</a> : block.plain_text}
          </span>
        );
      })}
    </div>
  );
}
