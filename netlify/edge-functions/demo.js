const peos=[
    {name:'xiaoyu',age:36,sex:'男'},
    {name:'haha',age:5,sex:'女'},
    {name:'茹茹',age:35,sex:'女'},
]


export default () => new Response(JSON.stringify(peos),{
    headers:{
        "Access-Control-Allow-Origin":"*"
    }
});

export const config = { path: "/test" };
