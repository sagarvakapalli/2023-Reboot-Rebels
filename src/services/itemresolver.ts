import {GraphQLClient, gql} from "graphql-request";
import {
  getSitecoreItemDetailsQueryParameter,
  GetSitecoreItemDetailsRequest,
  SitecoreItemDetails,
} from "src/services/models"



// export function getItemFieldValue(itempath: string, fieldname: string) {
//   const endpoint = "https://sc10_3sc.dev.local/sitecore/api/graph/edge?sc_apikey={44677454-EF05-485F-94BC-0BC12F3340D3}";  
//   const graphQLClient = new GraphQLClient(endpoint);
//   graphQLClient.setHeader('sc_apikey', "{44677454-EF05-485F-94BC-0BC12F3340D3}")

//   const query = gql`{item(path:"` + itempath + `",language:"en"){name,id,field(name:"`+fieldname +`"){ name, value }}}`
//   const data1 = graphQLClient.request(query).then((data) => console.log(data));
//   // const item: SitecoreItemDetails = data.item
//   // return item;
//   return data1;

// };

// export const getSitecoreItem = (itempath: string, fieldname: string) =>
//   async function (): Promise<SitecoreItemDetails> {
//     const endpoint = "https://sc10_3sc.dev.local/sitecore/api/graph/edge?sc_apikey={44677454-EF05-485F-94BC-0BC12F3340D3}";  
//     const graphQLClient = new GraphQLClient(endpoint);
//     const query = gql`{item(path:"` + itempath + `",language:"en"){name,id,field(name:"`+fieldname +`"){ name, value }}}`
  
//     const data = await graphQLClient.request(query);    
//     const item: SitecoreItemDetails = data.item
//     return item;
//   }

  export const getSitecoreItem = (itempath: string, fieldname: string) =>
  async function () : Promise<SitecoreItemDetails> {
    const endpoint = "https://sc10_3sc.dev.local/sitecore/api/graph/edge?sc_apikey={44677454-EF05-485F-94BC-0BC12F3340D3}";  
    const graphQLClient = new GraphQLClient(endpoint);
    const query = gql`{item(path:"` + itempath + `",language:"en"){name,id,field(name:"`+fieldname +`"){ name, value }}}`
  
    const data = await graphQLClient.request(query).then();    
    const item: SitecoreItemDetails = data.item
    return item;

    //await graphQLClient.request(query).then( data => { return data.item });
  }
