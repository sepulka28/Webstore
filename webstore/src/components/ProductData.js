
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));

console.log(images)



const Chairs = [
  { id: 1, title: "Chair 1", images: images[15], description: "Elevate your living space with our rich and sumptuous brown leather sofa, designed for comfort and style. Sink in and savor the experience." },
  { id: 2, title: "Chair 2", images: images[16], description: "Create a luxurious oasis in your living space with our white long sofa, perfect for those who seek both style and comfort." },
  { id: 3, title: "Chair 3", images: images[17], description: "Indulge in ultimate comfort with our luxurious quilt grey sofa, perfect for creating a cozy and inviting atmosphere in any living space." },
  { id: 4, title: "Chair 4", images: images[18], description: "Indulge in the serene comfort of our deep green sofa - the perfect addition to elevate your living space's elegance and simplicity." }
]

const Tables = [

  { id: 5, title: "Table 1", images: images[1], description: "Upgrade your living room's decor with our high-quality coffee table. Elevate your space with its stylish design and sturdy construction." },
  { id: 6, title: "Table 2", images: images[2], description: "Upgrade your dining room with this elegant and stylish wooden table that seats many. Perfect for hosting memorable gatherings." },
  { id: 7, title: "Table 3", images: images[3], description: "Introduce a modern flair to your space with our chic white table, boasting a stylish rounded design. Order now and enjoy free shipping!" },
  { id: 8, title: "Table 4", images: images[4], description: "Bring warmth and comfort to your living room with our artisanal low wooden table, perfect for cozy nights in front of the TV." },

]


const Dressers = [

  { id: 10, title: "Dresser 1", images: images[5], description: "Elevate your modern bathroom decor with our sleek and stylish dresser. Perfect for storing your essentials in a sophisticated way. Order now!" },
  { id: 11, title: "Dresser 2", images: images[6], description: "Elevate your storage game with our spacious black dresser, featuring numerous drawers to keep your belongings organized in style." },
  { id: 12, title: "Dresser 3", images: images[7], description: "Light-brown dresser, designed to bring practicality to your cozy space. With various drawers, offering ample storage for all your essentials." },
  { id: 13, title: "Dresser 4", images: images[8], description: "Upgrade your bedroom with our narrow, deep brown dresser made of high-quality wood and featuring five spacious drawers." },

]


const Sofas = [

  { id: 14, title: "Sofa 1", images: images[9], description: "Elevate your living space with our rich and sumptuous brown leather sofa, designed for comfort and style. Sink in and savor the experience." },
  { id: 15, title: "Sofa 2", images: images[11], description: "Create a luxurious oasis in your living space with our white long sofa, perfect for those who seek both style and comfort." },
  { id: 16, title: "Sofa 3", images: images[12], description: "Indulge in ultimate comfort with our luxurious quilt grey sofa, perfect for creating a cozy and inviting atmosphere in any living space." },
  { id: 17, title: "Sofa 4", images: images[13], description: "Indulge in the serene comfort of our deep green sofa - the perfect addition to elevate your living space's elegance and simplicity." },

]

export { Chairs, Tables, Dressers, Sofas }


