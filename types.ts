export type ArtObject = {
    primaryimageurl: string;
    title: string;
    people: { name: string, [key: string]: unknown; }[]; // Adjust this structure if needed
    classification: string;
    description: string;
    objectnumber: string;
    [key: string]: unknown; // Allows extra keys of any type
}