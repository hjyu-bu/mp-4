"use server";

const API_KEY = process.env.API_KEY;

export default async function getArts(query:string):Promise<Any[]>|undefined|null {
    try {
        if (!query) return null;

        const response = await fetch(`https://api.harvardartmuseums.org/object?apikey=${API_KEY}&keyword=${query}&page=0&hasimage=1`);

        if (response.status === 429) return null;
        else if (response.status !== 200) return undefined;

        const result = await response.json();
        return result.records;
    }
    catch (e) {
        console.log(`Error happened : ${e}`);
        return undefined;
    }
}