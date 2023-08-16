exports.handler = async (event) => {
    try {
        const input = event.input;

        if (!input || typeof input !== 'string') {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid input' })
            };
        }

        const length = input.length;

        return {
            statusCode: 200,
            body: JSON.stringify({ length })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'An error occurred' })
        };
    }
};

