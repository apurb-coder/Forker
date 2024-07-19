import mongoose from "mongoose";
import BlogPost from "./models/articles.model.js"

// Connect to your MongoDB database
mongoose.connect("mongodb://localhost:27017/blogDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const newPost = new BlogPost({
  title: "SUMMER FASHION TIPS: DRESSING UP FOR THE SUNNY DAYS!",
  authorName: "Varshita",
  content: `
    Summer has arrived, bringing with it the perfect opportunity to shed those heavy layers and embrace the light, breezy vibes of the season. Whether you're lounging poolside with a refreshing piña colada or wandering through the vibrant stalls of a farmers' market, it's time to give your wardrobe a fresh update. Let's explore the latest summer fashion trends that will effortlessly elevate your style and have you ready for those sun-kissed selfies!

    1. The Flowy Maxi Dress: Breezy Elegance
    Maxi dresses are the epitome of summer chic. These ankle-grazing wonders offer a sense of effortless elegance, almost like a gentle embrace from the sun itself. Embrace floral prints, pastel hues, or even trendy tie-dye patterns. The key is to find a flowy silhouette that allows you to twirl with abandon. Pair your maxi dress with strappy sandals for a versatile look that's perfect for brunch or a romantic sunset stroll along the beach.

    Creativity is contagious, and when brands and creators come together, they ignite a spark that lights up the digital world.

    2. Straw Hats: Shade with Style
    A wide-brimmed straw hat is not only a stylish accessory but also a practical necessity for protecting your skin from harmful UV rays. Channeling an air of mystery, it adds a touch of intrigue to any ensemble, whether you're sipping iced coffee at a café or perusing vintage bookstores. For an added dose of glamour, pair your straw hat with oversized sunglasses for an effortlessly chic look.

    3. Linen Everything: Cool and Crisp
    Linen is the quintessential fabric of summer, known for its breathability and effortless sophistication. Whether it's a linen jumpsuit, wide-leg pants, or a classic button-down shirt, opt for neutral tones like sandy beige, soft gray, and pale blue for a timeless yet contemporary vibe. Embrace the natural wrinkles of linen for a laid-back look that exudes effortless charm. Roll up those sleeves for an extra touch of nonchalance and enjoy the cool, crisp comfort of this summer staple.

    4. Statement Sandals: Feet First
    Step up your summer shoe game with statement sandals that demand attention. Say goodbye to basic flip-flops and hello to embellished slides, strappy gladiators, or espadrille wedges. Metallic accents, colorful beads, and woven details are all the rage this season, adding a touch of glamor to even the most casual of outfits.
    
    Summer fashion is all about embracing your style and celebrating the joy of the season. Mix and match different textures, experiment with bold prints, and don't forget to lather on the sunscreen!
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
