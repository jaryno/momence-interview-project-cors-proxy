const fetch = require("node-fetch");

exports.handler = async () => {
    try {
        const response = await fetch(
          "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch exchange rates");
        }

        const data = await response.text();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Content-Type": "text/plain",
            },
            body: data,
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ error: "Failed to fetch exchange rates" }),
        };
    }
};
