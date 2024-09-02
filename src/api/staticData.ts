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

export interface Posts {
  posts: Posts[];
}
//const static_post: Array<StaticPost> = []

const static_posts: PostSchema[] = [
   {
        id: 11,
        title: "It wasn't quite yet time to panic.",
        body: "It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he continued to delude himself into believing there was.",
        tags: [ 'mystery', 'american', 'history' ],
        reactions: { likes: 453, dislikes: 8 },
        views: 984
      },
      {
        id: 12,
        title: 'She was aware that things could go wrong.',
        body: 'She was aware that things could go wrong. In fact, she had trained her entire life in anticipation that things would go wrong one day. She had quiet confidence as she started to see that this was the day that all her training would be worthwhile and useful. At this point, she had no idea just how wrong everything would go that day.',
        tags: [ 'love', 'english' ],
        reactions: { likes: 362, dislikes: 45 },
        views: 480
      },
      {
        id: 13,
        title: 'She wanted rainbow hair.',
        body: "She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.",
        tags: [ 'mystery', 'classic', 'french' ],
        reactions: { likes: 268, dislikes: 39 },
        views: 3038
      },
      {
        id: 14,
        title: 'The paper was blank.',
        body: "The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was even more than frustrating. It was downright distressing.",
        tags: [ 'mystery', 'english', 'love' ],
        reactions: { likes: 118, dislikes: 17 },
        views: 721
      },
      {
        id: 15,
        title: 'The trees, therefore, must be such old',
        body: "The trees, therefore, must be such old and primitive techniques that they thought nothing of them, deeming them so inconsequential that even savages like us would know of them and not be suspicious. At that, they probably didn't have too much time after they detected us orbiting and intending to land. And if that were true, there could be only one place where their civilization was hidden.",   
        tags: [ 'fiction', 'history', 'crime' ],
        reactions: { likes: 951, dislikes: 12 },
        views: 2911
      },
      {
        id: 16,
        title: 'There was only one way to do things in the Statton house.',
        body: 'There was only one way to do things in the Statton house. That one way was to do exactly what the father, Charlie, demanded. He made the decisions and everyone else followed without question. That was until today.',
        tags: [ 'magical', 'french', 'american' ],
        reactions: { likes: 1257, dislikes: 11 },
        views: 2019
      },
      {
        id: 17,
        title: 'She was in a hurry.',
        body: "She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.",
        tags: [ 'french', 'magical', 'english' ],
        reactions: { likes: 50, dislikes: 31 },
        views: 511
      },
      {
        id: 18,
        title: 'She had a terrible habit of comparing her life to others',
        body: "She had a terrible habit of comparing her life to others. She realized that their life experiences were completely different than her own and that she saw only what they wanted her to see, but that didn't matter. She still compared herself and yearned for what she thought they had and she didn't.",
        tags: [ 'history', 'french', 'love' ],
        reactions: { likes: 277, dislikes: 29 },
        views: 1127
      },
      {
        id: 19,
        title: 'The rain and wind abruptly stopped.',
        body: "The rain and wind abruptly stopped, but the sky still had the gray swirls of storms in the distance. Dave knew this feeling all too well. The calm before the storm. He only had a limited amount of time before all Hell broke loose, but he stopped to admire the calmness. Maybe it would be different this time, he thought, with the knowledge deep within that it wouldn't.",
        tags: [ 'fiction', 'crime', 'magical' ],
        reactions: { likes: 566, dislikes: 2 },
        views: 2128
      },
      {
        id: 20,
        title: "He couldn't remember exactly where he had read it",
        body: "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
        tags: [ 'french', 'classic' ],
        reactions: { likes: 999, dislikes: 29 },
        views: 4280
      } 

]



/* NOTE:  You can use zod to validate types on runtime as typescript validates your data only on build time */
/* 
fetch('https://dummyjson.com/posts?limit=10&skip=10&select=title,body,tags,reactions,views')
  .then(response => response.json()) // Parse the JSON from the response
  .then(data => {
    // Access the posts array in the data
    
    const posts = data.posts as StaticPost[];

   //Doesn't yell error here when 3 properties type is mismatched
   // typescript doesn't validate data during runtime need to use library like joi or zod
   posts.forEach((post: StaticPost) => {
        static_posts.push(post) 
   });

   console.log("Done", static_posts);
})
.catch(error => console.error('Error fetching posts:', error)); 

const fetchData = async() : Promise<StaticPost[]> => {
    const data = await fetch('https://dummyjson.com/posts?limit=10&skip=10&select=title,body,tags,reactions,views')
    .then(response => response.json());
  

    return data.posts as StaticPost[];

}

const pushData = fetchData().then(data => {
    data.forEach((post:StaticPost) => {

        static_posts.push(post);
    })

    console.log("Inside pushData", static_posts);
})

console.log("This is pushData", pushData);
console.log("static post from outside pushData", static_posts);

*/
console.log("Is this working?")
fetch('https://dummyjson.com/posts?limit=10&select=title,body,tags,reactions,views')
.then(response => response.json())
.then(data=> console.log(data))
console.log("Done?")