class GraphQL{
    static endpoint = 'http://test.fishwithfred.com/graphql';

    static async query(query){
        const headers = {
            'Content-Type': 'application/json'
        };

        const response = await fetch(this.endpoint, {
            method: 'POST',
            headers,
            body: JSON.stringify({ query }),
        });

        const json = await response.json();

        if (json.errors) {
            console.log(json.errors);
            throw new Error('GraphQL query failed.');
        }

        return json.data;
    }
}

export default GraphQL;