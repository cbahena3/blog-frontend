import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';

export function Content() {
  let posts = [
    {
      id: 1,
      title: "Audi RS7",
      body: "Audi’s RS 7 Sportback can be safely described as a lean, mean, and enticing machine. Sporting a feisty four-liter V8 engine and a clever all-wheel-drive system which almost everybody knows what it’s called, this German land rocket can reach 62 mph (100 kph) from a standstill in just 3.6 seconds.",
      image_url: "https://s1.cdn.autoevolution.com/images/news/spectacular-looking-2023-audi-rs-7-reveals-its-dark-side-in-this-in-depth-look-208506_1.jpg",
    },
    {
      id: 2,
      title: "BMW M3",
      body: "At the heart of all M3 models is a 3.0-litre inline turbo-six. As used in the rear-drive M3 it makes 473 horsepower and 406 pound-feet of torque at 2,650 rpm. That’s more than enough to qualify as entertaining, and it delivers a posted average fuel economy of 12.6 L/100 km.",
      image_url: "https://smartcdn.gprod.postmedia.digital/driving/wp-content/uploads/2023/07/2024-BMW-M3-CS-gf6-e1691680449417.jpg",
    },
    {
      id: 3,
      title: "Mercedes C63 Amg",
      body: "Good day, introducing 2021 Mercedes-AMG C63 with custom made body kit. It has handmade or hand built twin-turbocharged 4.0-liter V-8 engine. In the C63, it produces 469 horsepower and 479 lb-ft of torque. The C63 S improves performance with 503 horsepower and 516 lb-ft of torque. Both engines use a nine-speed automatic with rear-wheel drive. Top speeds are electronically limited to 155 mph on the regular C63 and 180 mph on the S.",
      image_url: "https://img1.cgtrader.com/items/3701404/efe701725a/large/3d-mercedes-benz-amg-c63-bn-59-3d-model-obj-fbx-blend-gltf.jpg",
    },
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
