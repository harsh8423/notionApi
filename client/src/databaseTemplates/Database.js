import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../pageTemplates/main.css"
import Title from "./Title";
import Paragraph from "./Paragraph";
import Image from "./Image";

function Database() {

    let navigate = useNavigate();

  const [NotionData, setNotionData] = useState(null);
  const [pageTitle, setpageTitle] = useState(null);
  const [pageDesc, setpageDesc] = useState(null);
  const [databaseID, setdatabaseID] = useState("53005a072cfd46d183f5fd07e1042ba8")
  const getBlocks = async (e) => {
    const response = await fetch("http://localhost:5000/getDatabase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        databaseID: databaseID,
      })
    });
    const json = await response.json();

    if (json) {
      setNotionData(json.data);
      setpageTitle(json.pageTitle);
      setpageDesc(json.pageDesc);
    } else {
      console.log("error in getting data fron server");
    }

    console.log(json);
  };

  useEffect(() => {
    getBlocks();
  }, []);

  const handlePage = (url)=>{
    console.log("handlePage function clicked & url: ", url)
    const pageId = url.slice(-32);
    console.log(pageId)
    navigate("../page", { state: pageId});
  }

  return (
    <div className="container-fluid dotted-background">
      <div className="row text-center">
        {pageTitle && <Title text={pageTitle} />}
        {pageDesc && <Paragraph text={pageDesc} />}
        <br/>
        <div className="pari">
        {NotionData?.results?.map((block) => {
            const title = block?.properties?.Name?.title[0].plain_text;
            const imgUrl = block?.cover?.file?.url || block?.cover?.external?.url
            return <div className="parinside" style={{cursor:"pointer"}} onClick={()=>handlePage(block?.url)}>
             <Image key={block.id} title={title} imgUrl={imgUrl} />;
             
        </div>
          }
        )}
        </div>
      </div>
    </div>
  );
}

export default Database;
