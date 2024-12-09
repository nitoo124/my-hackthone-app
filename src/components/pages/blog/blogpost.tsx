import { FaUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { DiCelluloid } from "react-icons/di";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";




export default function Blog() {
    
    const blogs = [
      {
        title: "Going all-in with millennial design",
        date: "12 Jul 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        image: "/images/blog/blogimg/blog1.png",
      },
      {
        title: "Exploring new ways of decorating",
        date: "15 Aug 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        image: "/images/blog/blogimg/blog2.png",
      },
      {
        title: "Creative office setups",
        date: "20 Sep 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        image: "/images/blog/blogimg/blog3.png",
      },
    ];
  
    const categories = ["Design", "Furniture", "Technology", "Lifestyle", "DIY"];
    const recentPosts = [

        {
            img : "/images/blog/blog-category/category1.png"
        },
        {
            img : "/images/blog/blog-category/category2.png"
        },
        {
            img : "/images/blog/blog-category/category3.png"
        },
        {
            img : "/images/blog/blog-category/category4.png"
        },
        {
            img : "/images/blog/blog-category/category5.png"
        },
      
   
    ];
    
  
    return (
      <div className=" min-h-screen  max-w-[1440px] mx-auto mt-10  ">
        <div className=" px-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1163px] mx-auto  ">
          {/* Left Side: Blog Posts */}
          <div className="col-span-2 pb-5">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden mb-6"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover"
                />
            
                <div className="p-4">
                    {/* icons */}
                    <div className=" flex gap-8 text-[#9F9F9F]">
                  <div className=" flex gap-2">  
                    <FaUser/>
                  <p>Admin</p>
                  </div>
                   <div className=" flex gap-2">
                   <MdOutlineDateRange/>
                   <p>14 Oct 2022</p>
                   </div>
                   <div className=" flex gap-2">
                   <DiCelluloid size={20}/>
                   <p>Wood</p>
                   </div>
                    </div>
                  <h2 className=" text-[30px] font-medium mb-2 mt-3">{blog.title}</h2>
                  <p className="text-[#9F9F9F] text-[15px] mt-3">{blog.description}</p>
                  <button className="mt-4 text-[16px] border-b-2 border-black ">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          {/* Right Side: Sidebar */}
          <div className="bg-white shadow-md rounded-lg px-8 w-[393px] mx-8">
            {/* Search Bar */}
            <div className=" relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              />
              <IoSearchOutline className=" absolute top-3 right-4" size={20}/>
            </div>
  
            {/* Categories */}
            <div className="m-6">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className=" text-[#9F9F9F] text-[16px] cursor-pointer mt-10"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Recent Posts */}
            <div>
              <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                  
               <div>
                {
                    recentPosts.map((img, i)=>{
                        return(
                        <div className="">
                            <Image className="mt-5" src={img.img} alt="categories"
                            width={241}
                            height={241}
                            loading="lazy"/>
                        </div>
                        )
                    })
                }
               </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  