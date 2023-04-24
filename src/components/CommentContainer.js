import React from 'react'
const CommentData =[
    {
    name: "Anika Purohit",  
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  
    ,replies:[{    
        name: "Anika Purohit",  
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  
        ,replies:[],
        },],
    },
    {
    name: "Anika Purohit",  
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  
    ,replies:[],
    },
    {
    name: "Anika Purohit",  
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  
    ,replies:[{    
        name: "Anika Purohit",  
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  
        ,replies:[{    
            name: "Anika Purohit",  
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  
            ,replies:[],
            },],
        },],
    },
    {
    name: "Anika Purohit",  
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  
    ,replies:[{    
        name: "Anika Purohit",  
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  
        ,replies:[],
        },],
    },
    {name: "Anika Purohit",  
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  
    ,replies:[
    {    
    name: "Anika Purohit",  
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  
    ,replies:[
        {    
            name: "Anika Purohit",  
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  
            ,replies:[
            ],
            },
    ],
    },
    ],
    },
    {    
        name: "Anika Purohit",  
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  
        ,replies:[
        ],
        },
    
]
const Comment = ({data}) =>{
 const { name,text,replies }  = data; 
    return (
    <div className='flex mt-3  bg-slate-100 rounded-lg p-3'>    
    <div className=''>
    <img className='w-12 h-12'
    alt="user"
    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
    </div>
    <div className=''>
    <p className='font-bold'>{name}</p>    
    <p className=''>{text}</p>    
    </div>
    </div>
    );
};

const CommentList = ({comments}) =>{
    return comments.map((comments,index)=>(
     <div>   
     <Comment key={index} data={comments}/> 
    <div className='ml-10'>
    <CommentList comments={comments.replies}/>   
    </div>
    </div>
    )
    );
}
const CommentContainer = () => {
  return (
    <div className=' ml-4 p-2 w-[1070px]'>
    <h1 className='text-lg font-bold'>Comments : </h1>
    <CommentList comments={CommentData}/>
    </div>
  )
}

export default CommentContainer