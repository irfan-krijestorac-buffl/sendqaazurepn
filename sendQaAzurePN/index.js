const { MongoClient } = require('mongodb');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    let responseMessage = name
        ? "Goedemiddag, " + name + ". Irfan triggered HTTP function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    /*
    // Beginning of MongoDB read
    const directConnectionClient = await MongoClient.connect(
        process.env.DATABASE_URL,
      { useNewUrlParser: true }
    ).catch(err => {
      context.log(err);
    });
    const directDBConnection = directConnectionClient.db();

    try {
    	const usersCount = await directDBConnection
            .collection('users')
            .countDocuments();
        context.log(usersCount);

        responseMessage = `${responseMessage}\nNumber of users is: ${usersCount}`

	} finally {
		directConnectionClient.close();
    }
    // End of MongoDB read
    */

    context.log(process.env.DATABASE_URL);


    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}