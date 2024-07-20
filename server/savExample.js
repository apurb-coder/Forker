import mongoose from "mongoose";
import BlogPost from "./models/articles.model.js"

// Connect to your MongoDB database
mongoose.connect("mongodb://localhost:27017/blogDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const newPost = new BlogPost({
  title: "Lorem ipsum dolor sit, amet consectetur adipisicing",
  authorName: "Apurb",
  content: `
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
  `,
  titleImage: "url_to_title_image.jpg",
});

newPost
  .save()
  .then(() => {
    console.log("Blog post saved successfully!");
    mongoose.connection.close(); // Close the connection when done
  })
  .catch((err) => {
    console.error("Error saving blog post:", err);
  });
