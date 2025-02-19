const API_URL = "http://localhost:7201/api/translate";

export async function translateQuery(userQuery) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: userQuery }),
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch response: ${response.statusText}`);
        }

        const data = await response.json();
        return data.translatedQuery;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}
