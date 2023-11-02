import ArticleCards from '../Components/ArticleCards'
import { blogData, propdata } from "../MockData/BlogItems";


// const data : propdata[]=

// export const articleloader=()=>{
//     const data : propdata[]=[{
//         id: 1, 
//         image: '',
//         heading:'Data Structures and Algorithms for Frontend Interviews: How Much Do You Need to Know?', 
//         desc:'asdsfdfd'
//         },
//         {
//             id: 1, 
//             image: '',
//             heading:'Data Structures and Algorithms for Frontend Interviews: How Much Do You Need to Know?', 
//             desc:'asdsfdfd'
//         },
//         {
//             id: 1, 
//             image: '',
//             heading:'Data Structures and Algorithms for Frontend Interviews: How Much Do You Need to Know?', 
//             desc:'asdsfdfd'
//         },
//         {
//             id: 1, 
//             image: '',
//             heading:'Data Structures and Algorithms for Frontend Interviews: How Much Do You Need to Know?', 
//             desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt molestias quo natus. Fugiat et quaerat velit corrupti voluptate voluptatibus vero rem deleniti provident repellendus illum reprehenderit sunt modi delectus soluta possimus dolore officia, fuga, voluptates ducimus voluptatum suscipit itaque asperiores. Quasi placeat ratione omnis est temporibus accusantium distinctio, rem incidunt fugiat nobis quae officia, similique minima nisi maxime inventore dolore quas voluptates vel nostrum mollitia veritatis! Adipisci voluptas inventore perferendis laudantium explicabo soluta nihil ut reiciendis autem hic illo mollitia neque distinctio ducimus iure reprehenderit dignissimos quia similique repellendus quibusdam, alias corrupti. Repellendus, voluptate at porro odit veniam quidem.'
//         }
//     ]
//     return data
// }

const Blogs = () => {
    return( 
        <div className='mx-[15%]'>
        More Articles
            <div className='grid grid-cols-3 gap-5'>
                {
                    blogData?.map((item, index: number) => {
                        return <ArticleCards {...item} key={index} />
                    })
                }
            </div>
        </div>
  )
};

export default Blogs;
