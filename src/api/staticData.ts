// npx tsx run ts file directly unlike tsc <file_name> compile and transform ts file to js file then run using node <file_name>
//npx tsx ./src/api/staticData.ts


export interface PostSchema  {
    id: number,
    title: string,
    body: string,
    tags: string[] // Array<string>,
    reactions: {likes: number, dislikes: number}, // intentionally made the type here wrong (string but changed to number now)
    views: number

}