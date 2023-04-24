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
    <div className='flex mt-3  bg-stone-100 rounded-lg p-2'>    
    <div className=''>
    <img className='w-10 h-10 mr-1'
    alt="user"
    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
    </div>
    <div className=''>
    <p className='font-semibold text-sm'>{name}</p>    
    <p className='text-sm'>{text}</p>    
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
    <div className=' ml-4 p-1 w-[1070px]'>
    <h1 className='text-md '>Comments : </h1>
    <CommentList comments={CommentData}/>
    </div>
  )
}

export default CommentContainer