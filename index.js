require('dotenv').config();

const mindeeTest = async () => {
  const mindee = require("mindee");
  // for TS or modules:
  // import * as mindee from "mindee";
  
  // Init a new client
  const mindeeClient = new mindee.Client({ apiKey: process.env.API_KEY });
  
  // Load a file from disk
  const inputSource = mindeeClient.docFromPath("./assets/files/img-1.jpeg");
  
  // Parse it
  const apiResponse = mindeeClient
    .parse(mindee.product.InvoiceV4, inputSource);
  
  // Handle the response Promise
  apiResponse.then((resp) => {
    // print a string summary
    console.log(resp.document.toString());
  });
}

mindeeTest();