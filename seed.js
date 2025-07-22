import mongoose from "mongoose";
import dotenv from "dotenv";
import Pet from "./models/pet.js"; // adjust path as needed

dotenv.config();

const samplePets = [
  // Dogs
  {
    id: 1,
    name: "Bella",
    breed: "Labrador",
    age: 2,
    weight: "25kg",
    description: "Friendly and playful Labrador who loves to fetch balls.",
    image: "https://tse2.mm.bing.net/th/id/OIP.g0p9GzecZBmWjsSYrsvt1AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    name: "Charlie",
    breed: "Beagle",
    age: 3,
    weight: "10kg",
    description: "Curious and active Beagle. Great with kids!",
    image: "https://cdn.britannica.com/80/29280-050-A3A13277/Beagles-pets.jpg",
  },
  {
    id: 3,
    name: "Leo",
    breed: "Golden Retriever",
    age: 1,
    weight: "20kg",
    description: "Loyal and energetic Golden Retriever, perfect family pet.",
    image: "https://i.shgcdn.com/148dc4ae-078b-4962-a7ba-70b75be8df4e/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    id: 4,
    name: "Luna",
    breed: "German Shepherd",
    age: 3,
    weight: "30kg",
    description: "Smart and protective, great for security and companionship.",
    image: "https://png.pngtree.com/background/20230606/original/pngtree-two-german-shepherd-puppies-sitting-on-a-wooden-fence-picture-image_2883055.jpg",
  },
  {
    id: 5,
    name: "Oliver",
    breed: "Pitbull",
    age: 2,
    weight: "25kg",
    description: "Strong and loving Pitbull who enjoys cuddles and walks.",
    image: "https://geniusvets.s3.amazonaws.com/gv-dog-breeds/american-pitbull-1.jpg",
  },
  {
    id: 6,
    name: "Coco",
    breed: "Pomeranian",
    age: 3,
    weight: "5kg",
    description: "Tiny and fluffy, loves to be pampered and held.",
    image: "https://th.bing.com/th/id/R.a3efc55b830119673fb83a8cf061e6b0?rik=sUAbn5yXjNMgiQ",
  },
  {
    id: 7,
    name: "Daisy",
    breed: "Shih Tzu",
    age: 2,
    weight: "7kg",
    description: "Gentle and adorable lap dog, very friendly with kids.",
    image: "https://tse2.mm.bing.net/th/id/OIP.GcAVSYfviH5XhUX-amgLpQHaE8",
  },
  {
    id: 8,
    name: "Rocky",
    breed: "Australian Shepherd",
    age: 3,
    weight: "22kg",
    description: "Active and agile, needs space to run and explore.",
    image: "https://centralparkpuppies.com/wp-content/uploads/2023/02/miniature-australian-shepherd-puppies-for-sale.png",
  },

  // Cats
 {
    id: 9,
    name: "Whiskers",
    breed: "Russian Blue",
    age: 2,
    weight: "5kg",
    description: "Talkative and affectionate cat that loves attention.",
    image: "https://th.bing.com/th/id/R.49c7afe7904f665863acf66b79c0ef07?rik=TxKjS3G8Nfgc%2bQ&riu=http%3a%2f%2fimg1.wikia.nocookie.net%2f__cb20140123040723%2fcats%2fen%2fimages%2fa%2fac%2fRussian-blue-cat.jpg&ehk=L1YrtOVDVdLmCVoKzkSKQvJXDIzGYt8Fv80wp4CfN1s%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 10,
    name: "Mittens",
    breed: "Persian",
    age: 3,
    weight: "6kg",
    description: "Calm and fluffy cat, ideal for a relaxed home environment.",
    image: "https://e0.pxfuel.com/wallpapers/476/194/desktop-wallpaper-my-amazing-persian-prince-persian-cat-white-cats-white-cats.jpg",
  },
  {
    id: 11,
    name: "Shadow",
    breed: "Siberian Forest",
    age: 1,
    weight: "4kg",
    description: "Sleek black coat, very playful and curious.",
    image: "https://www.thehappycatsite.com/wp-content/uploads/2017/07/The-Siberian-Cat-HC-long.jpg",
  },
  {
    id: 12,
    name: "Lily",
    breed: "Ragdoll",
    age: 2,
    weight: "5.5kg",
    description: "Extremely affectionate, loves being carried and cuddled.",
    image: "https://tse2.mm.bing.net/th/id/OIP.jkPjyCkVIJlyAV6wRPc4YwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  },

  // Rabbits
  {
    id: 17,
    name: "Dusty",
    breed: "Netherland Dwarf",
    age: 1,
    weight: "1.2kg",
    description: "Tiny and energetic bunny with a gentle nature. Perfect for apartment life.",
    image: "https://tse3.mm.bing.net/th/id/OIP.DWECnlmltojJhpCL_d4QmQAAAA",
  },
  {
    id: 18,
    name: "Roger",
    breed: "Holland Lop",
    age: 2,
    weight: "2kg",
    description: "Loves cuddles and playtime. Very friendly and easy to handle.",
    image: "https://cdn.fotofits.com/petzlover/gallery/img/l/holland-lop-840292.jpg",
  },
  {
    id: 19,
    name: "Bunny",
    breed: "Florida White Rabbit",
    age: 1.5,
    weight: "1.8kg",
    description: "Gentle and clean pet. Great for first-time rabbit owners.",
    image: "https://cdn-fastly.petguide.com/media/2022/02/16/8214275/florida-white-rabbit.jpg",
  },
  {
    id: 20,
    name: "Hazel",
    breed: "Havana Rabbit",
    age: 2,
    weight: "2.5kg",
    description: "Sweet and calm rabbit with a shiny coat. Likes to be groomed.",
    image: "https://www.kobipets.com/wp-content/uploads/2023/02/Grooming-Habits.jpg",
  },

  // Fishes
  {
    id: 21,
    name: "Goldie",
    breed: "Betta Fish",
    age: 1,
    weight: "30g",
    description: "Colorful and low-maintenance fish. Prefers to live alone.",
    image: "https://smartaquariumguide.com/wp-content/uploads/2019/08/betta-fish-1.jpg",
  },
  {
    id: 22,
    name: "Ariel",
    breed: "Tetras",
    age: 0.5,
    weight: "15g",
    description: "Peaceful schooling fish that love to swim in groups.",
    image: "https://smartaquariumguide.com/wp-content/uploads/2019/08/neon-tetras.jpg",
  },
  {
    id: 23,
    name: "Doddle",
    breed: "Guppies",
    age: 0.8,
    weight: "10g",
    description: "Brightly colored and active fish. Perfect for small tanks.",
    image: "https://smartaquariumguide.com/wp-content/uploads/2019/08/guppy-fish.jpg",
  },
  {
    id: 24,
    name: "Twinkle",
    breed: "Gold Fish",
    age: 1.5,
    weight: "150g",
    description: "Classic and hardy fish. Very social and curious.",
    image: "https://smartaquariumguide.com/wp-content/uploads/2019/08/goldfish.jpg",
  },
];

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    await Pet.deleteMany({});
    await Pet.insertMany(samplePets);
    console.log("✅ Sample pets inserted");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ DB connection error", err);
    process.exit(1);
  });