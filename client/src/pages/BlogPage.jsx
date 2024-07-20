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
          src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1714712971/Screenshot_2024-05-03_103708_dx4yto.png"
          alt="article Img"
          className="rounded-[2rem]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-[2rem]"></div>
        <div className="absolute bottom-[4%] left-[2%] uppercase text-white font-bold text-2xl">
          {/* Title over the Article Image */}
          Delegating Social Media Tasks to AI
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
        Delegating Social Media Tasks to AI
      </div>
      {/* Articles */}
      <div>
        <div class="para1">
          <br />
          <div>
            In today's digital age, maintaining a vibrant social media presence
            is crucial for businesses and individuals alike. However, the
            demands of crafting engaging content, scheduling posts, and
            analyzing metrics can be overwhelming. Enter artificial intelligence
            (AI) – the game-changer that's revolutionizing how we manage our
            online presence. Let's delve into how delegating social media tasks
            to AI can transform your strategy and streamline your workload.
          </div>
          <br />
        </div>
        <div class="para1">
          <br />
          <div>
            <b>Unlocking Efficiency with AI-Powered Schedulers</b> <br /> Say
            goodbye to manual scheduling and hello to AI-powered schedulers!
            These innovative tools like Hootsuite, Magic Studio, Wordtune etc
            analyze your audience's behavior, optimize posting times, and ensure
            your content reaches its maximum potential. By delegating this task
            to AI, you free up valuable time to focus on creating quality
            content and engaging with your audience in real-time. Plus, with
            advanced features like post recycling and cross-platform scheduling,
            you'll never miss an opportunity to connect with your followers.
          </div>
          <br />
        </div>
        <div class="quote">
          <div class="quoteline">
            Empower your social media strategy by delegating tasks to AI,
            freeing your time to focus on creativity and engagement while
            algorithms handle the rest.
          </div>
        </div>
        <div class="quoteby"></div>
        <div class="para1"><br/><div><b>Crafting Compelling Content with AI Writing Assistants</b> <br/>Struggling to find the right words for your social media posts? AI writing assistants are here to save the day! These intelligent tools analyze your brand's voice, suggest relevant hashtags, and even provide content ideas based on trending topics. Whether you're drafting a captivating caption or brainstorming ideas for your next campaign, AI writing assistants empower you to create content that resonates with your audience effortlessly.</div><br/></div>
        <div class="para2"><br/><div><b>Analyzing Performance Metrics with AI Analytics Tools</b><br/>Understanding your social media performance is key to refining your strategy and maximizing your ROI. AI analytics tools take the guesswork out of data analysis by providing actionable insights into your audience demographics, engagement metrics, and content performance. From identifying top-performing posts to predicting future trends, these tools equip you with the knowledge you need to make informed decisions and drive meaningful results for your business.</div><br/></div>
        <div class="para3"><b>Engaging Audiences with AI-Powered Chatbots</b><br/>In today's fast-paced digital landscape, prompt customer service is non-negotiable. AI-powered chatbots offer round-the-clock support, answering FAQs, guiding users through the sales funnel, and even personalizing recommendations based on user preferences. By delegating customer inquiries to chatbots, you not only enhance the overall user experience but also free up your team to focus on more complex tasks that require human intervention.</div>
      </div>
      {/* PopularPost.jsx */}
    </div>
  );
}

export default BlogPage