const { Client } = require("@notionhq/client");

const notion = new Client({ auth: 'secret_ToijhXm1EuR9OZagr60BqK32uRhEjll8jwF4QVhTdrF'});

export default async function handler(req,res){

    const databaseId = 'c56dbf67debc46d9b9229fb76f113090';
    const query = await notion.databases.query({
        database_id:databaseId,
    })

    console.log(query.results)
    
    res.status(200).json({name:'john leo'})
}