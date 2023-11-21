import React,{useEffect,useState} from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import Title from './Title';
import Paragraph from '../blockTemplates/Paragraph';
import Heading from '../blockTemplates/Heading';
import BulletListItem from '../blockTemplates/BulletListItem';
import NumberedListItem from '../blockTemplates/NumberedListItem';
import Image from '../blockTemplates/Image';
import ColumnList from '../blockTemplates/ColumnList';
import ChildPage from '../blockTemplates/ChildPage';
// import Quote from '../components/Quote';
// import Embed from '../components/Embed';
import './main.css'

function Page(props) {
  
  const location = useLocation();
  const navigate = useNavigate()
  
  const [NotionData, setNotionData] = useState(null)
  const [pageTitle, setpageTitle] = useState(null);
  const [pageID, setpageID] = useState(props.id? props.id:location.state)

  if(props.id){
    console.log(props.id)
  }
  
  const getBlocks = async (e) => {    
    
    const response = await fetch("http://localhost:5000/getBlocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pageID: pageID,
        paged: props.paged? "no":"yes"
      })
    });
    const json = await response.json();
    
    if(json){
      setNotionData(json.data);
      setpageTitle(json?.pageTitle)
    }else{
      console.log("error in getting data fron server")
    }
    console.log(json)
  };


  const handlePage=(id)=>{
    console.log("clickerd")
    navigate("../page", { state: id, paged:true });
  }
  
  
  useEffect(() => {
    getBlocks();
  }, []);

  return (
    <div className="container dotted-background mb-5">
      <div className='row'>
      {pageTitle && <Title text={pageTitle}/> }
      {NotionData?.results?.map((block) => {
        const id= block.has_children? block.id:null
        switch (block.type) {
          case 'paragraph':
            var paraArray = block?.paragraph?.rich_text;
            return <Paragraph key={block.id} text={paraArray} id={id}/>     
          case 'heading_1':
            const head1Array = block?.heading_1?.rich_text;
            return <Heading key={block.id} level={1} text={head1Array} id={id}/>;
          case 'heading_2':
            const head2Array = block?.heading_2?.rich_text;
            return <Heading key={block.id} level={2} text={head2Array} id={id}/>;
          case 'heading_3':
            const head3Array = block?.heading_3?.rich_text;
            return <Heading key={block.id} level={3} text={head3Array} id={id}/>;
          case 'bulleted_list_item':
            const bulletArray = block?.bulleted_list_item?.rich_text;
            return <BulletListItem key={block.id} text={bulletArray} id={id}/>;
          case 'numbered_list_item'||'column':
            const numberedArray = block?.numbered_list_item?.rich_text;
            return <NumberedListItem key={block.id} id={id} text={numberedArray} />;
          case 'image':
            const imgArray = block?.image;
            return <Image key={block.id} data={imgArray} id={id}/>;
          case 'quote':
            var paraArray = block?.quote?.rich_text;
            return <Paragraph key={id} text={paraArray} quote={true} id={id}/>;
          case 'column_list':
            return <ColumnList key={id} id={id}/>;
          case 'column':
            return <ColumnList key={id} id={id}/>;
          case 'callout':
            var callArray = block?.callout?.rich_text;
            return <Paragraph key={id} callout={true} text={callArray} id={id}/>;
          case 'child_page':
            return <div className='para' style={{textDecoration:"underline", fontWeight:"bold", cursor:"pointer"}} onClick={()=>handlePage(id)}>{block.child_page.title}</div>
          
          // Add more cases for other block types as needed
          default:
            return null;
        }
      })}
      </div>
    </div>
  );
}

export default Page;
