// Import required modules
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require('axios');
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: 'secret_Inj3WyM7cHS9X0fAmhVXMMuXzCMSrZvSudwpmhHHHgm'});
app.use(cors());

// Parse JSON requests
app.use(express.json());

const notionHeaders = {
  headers: {
    'Authorization': `Bearer secret_Inj3WyM7cHS9X0fAmhVXMMuXzCMSrZvSudwpmhHHHgm`,
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
  },
};
// Define a test route
app.post("/getBlocks", async (req, res) => {

  const {pageID, paged}= req.body
  console.log(pageID)
  try {
    const response = await axios.get(
      `https://api.notion.com/v1/blocks/${pageID}/children?page_size=100`,
      notionHeaders
    );

    

    if(paged=="yes"){
      const response2 = await axios.get(
        `https://api.notion.com/v1/pages/${pageID}`,
        notionHeaders
      );

      const data = await response.data;
      const pageDetails = await response2.data;
      const pageTitle = pageDetails.properties?.title?.title[0]?.plain_text || pageDetails?.properties?.Name?.title[0].plain_text
      
      res.json({ pageTitle, data });

    }else{
      const data = await response.data;
      res.json({ data });
    }


  } catch (error) {
    console.error("Error fetching Notion page:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.post("/getDatabase", async (req, res) => {

  const {databaseID} = req.body;
  console.log(databaseID)


  try {
    const response = await axios.get(
      `https://api.notion.com/v1/databases/${databaseID}`,
      notionHeaders
    );

    const response2 = await notion.databases.query({
      database_id: databaseID
    });



    const data = await response2;
    const pageDetails = await response.data;
    const pageTitle = pageDetails.title[0].plain_text
    const pageDesc =pageDetails.description
    
    res.json({ pageTitle,pageDesc,data});
  } catch (error) {
    console.error("Error fetching Notion page:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



// Start the server on port 5000
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
