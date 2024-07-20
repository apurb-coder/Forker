import React from "react";
import {useParams} from "react-router-dom"
import ArrowLogo from "../assets/arrow_wxeel0.jpg"

const BlogPage = () => {
  const { blogNumber } = useParams();
  console.log(blogNumber)
  return (
    <div className="flex flex-col mt-16 max-w-[947px] mx-auto">
      {/* Navigation at the top */}
      <div className="flex items-center text-[#3d3d3d] mb-3 space-x-2">
        <div>Blog</div>
        <img src={ArrowLogo} alt="arrowlogo" className="w-[10px] h-[10px]" />
        {/* change here dynamically through api call */}
        <div>Blog Name</div>
      </div>
      {/* articls image */}
      <div className="relative rounded-[2rem]">
        <img
          src="https://plus.unsplash.com/premium_photo-1675342786681-e33a19414cfd?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="article Img"
          className="rounded-[2rem]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-[2rem]"></div>
        <div className="absolute bottom-[4%] left-[2%] uppercase text-white font-bold text-2xl">
          {/* Title over the Article Image */}
          Lorem ipsum dolor sit, amet consectetur adipisicing
        </div>
      </div>
      {/* Author and details */}
      <div className="flex justify-between my-3">
        <div className="text-[#F76f32] font-semibold">Name of Author</div>
        <div className="flex items-center space-x-4">
          <img
            src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707285106/Frokerassets/Artboard_ne0yo2.jpg"
            alt="like icon"
            className="w-9 h-9 text-orange-500"
          />
          <div className="">1 Likes</div>
        </div>
      </div>
      {/* Title */}
      <div className="text-[#666] font-bold">
        Lorem ipsum dolor, sit amet consectetur adipisicing
      </div>
      {/* Articles */}
      <div>
        <div class="para1">
          <br />
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis excepturi animi quia architecto necessitatibus sint nulla cupiditate nisi eius? Quasi quidem error adipisci earum quae ex amet quas voluptate. Quas sunt eum quasi neque vitae inventore, repellendus, aspernatur modi, sint deserunt nobis? Distinctio aliquid, neque hic libero corrupti necessitatibus optio.
          </div>
          <br />
        </div>
        <div class="para1">
          <br />
          <div>
            <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis?</b> <br /> Say
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium qui commodi nostrum minus dignissimos repellat esse quaerat doloremque consequuntur ut corporis harum perferendis est enim distinctio maxime quisquam, adipisci vitae. Dicta pariatur ducimus, praesentium mollitia veniam odit modi magni nihil maxime dolores odio. Veniam repellat omnis reiciendis, distinctio aliquid iste.
          </div>
          <br />
        </div>
        <div class="quote">
          <div class="quoteline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum alias ipsum facilis vel aliquam error, rerum earum neque cupiditate blanditiis?
          </div>
        </div>
        <div class="quoteby"></div>
        <div class="para1">
          <br />
          <div>
            <b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, rem.</b> <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, tenetur facere? Repellendus, maiores. Saepe voluptatem quaerat non vel deserunt. Sed architecto qui quas quidem dolore libero ad at optio, accusantium voluptatem accusamus ducimus placeat, eligendi ut recusandae deleniti ipsa nobis eos quo distinctio. Explicabo cumque exercitationem sed facere adipisci illo!
          </div>
          <br />
        </div>
        <div class="para2">
          <br />
          <div>
            <b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, esse.</b>
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis consectetur architecto, velit iusto molestiae nemo et, enim atque beatae minima temporibus fugiat dolor? Voluptate, nesciunt distinctio! Ut delectus, aut temporibus corrupti quas eius. Delectus iste illum sed vero. Illo ex fugit sit error ad autem voluptates, blanditiis deleniti quia laborum.
          </div>
          <br />
        </div>
        <div class="para3">
          <b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, error!</b>
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit facere nesciunt neque eaque. Sequi aperiam quam doloremque nulla? Ullam porro, doloremque hic saepe dignissimos quis atque error incidunt placeat repellendus nesciunt odio nulla, at ratione reprehenderit. Facilis, magnam sunt, eveniet quia consectetur dolore sequi quaerat in deserunt corporis rem.
        </div>
        <div class="secondImgartt">
          <img
            src="https://plus.unsplash.com/premium_photo-1675342786681-e33a19414cfd?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="blog images"
            class="secondImgart"
          />
        </div>
        <div class="para3">
          <b>Lorem ipsum dolor sit amet.</b>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos cumque ab perspiciatis ipsam rerum iusto! Magni sapiente deserunt modi itaque pariatur inventore aliquid cupiditate.
        </div>
        <div class="para4"></div>
        <div class="para4">
          <b>Conclusion: Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptate quod, repellat iure cum quidem officia temporibus ea, dolorem nulla ducimus delectus quibusdam explicabo hic unde quo quas? Excepturi expedita dignissimos labore temporibus maiores et fugit natus, consequuntur praesentium, corporis provident aut ipsum reprehenderit cumque corrupti asperiores nihil officiis numquam!
        </div>
      </div>
      {/* PopularPost.jsx */}
    </div>
  );
}

export default BlogPage