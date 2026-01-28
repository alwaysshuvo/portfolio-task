import Image from "next/image";

export default function Blog() {
  const allBlogPosts = [
    {
      id: 1,
      title: "The artist vacation is to send light into the human heart.",
      excerpt:
        "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      author: "— Posted by Daryl Smith —",
      category: "Photography ",
      date: " 28 Apr 2022",
      image: "/images/blog-1.png",
      width: 330,
      height: 320,
    },
    {
      id: 2,
      title: "There are countless versions of lorem ipsum, the most famous.",
      excerpt:
        "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      author: "— Posted by Daryl Smith —",
      category: "Graphic design",
      date: "28 Apr 2022",
      image: "/images/blog-2.png",
      width: 330,
      height: 320,
    },
    {
      id: 3,
      title: "UI Interactions of the week",
      excerpt:
        "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      author: "— Posted by Daryl Smith —",
      category: "Design",
      date: "28 Apr 2022",
      image: "/images/blog-3.png",
      width: 330,
      height: 220,
    },
    {
      id: 4,
      title: "The mission of art is to represent nature not to imitate her.",
      excerpt:
        "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      author: "— Posted by Daryl Smith —",
      category: "Adventure",
      date: "28 Apr 2022",
      image: "/images/blog-4.png",
      width: 330,
      height: 240,
    },
    {
      id: 5,
      title: "The principles of true art is not to portray, but to evoke.",
      excerpt:
        "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      author: "— Posted by Daryl Smith —",
      category: "Graphic design",
      date: "28 Apr 2022",
      image: "/images/blog-5.png",
      width: 330,
      height: 220,
    },
    {
      id: 6,
      title: "Party Jokes Startling But Unnecessary.",
      excerpt:
        "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been....",
      author: "— Posted by Daryl Smith —",
      category: "Travel",
      date: "28 Apr 2022",
      image: "/images/blog-6.png",
      width: 330,
      height: 220,
    },
  ];

  const displayOrder = [0, 3, 1, 4, 2, 5];
  const blogPosts = displayOrder.map((index) => allBlogPosts[index]);

  return (
    <section id="blog" className="w-full bg-[#171B1A] py-12 md:py-24">
      {/* Section Header */}
      <h2 className="text-center text-3xl md:text-[48px] font-bold text-white mb-12 md:mb-20 px-4">
        Blog
      </h2>

      {/* Left empty + Right content (like Skills/Resume/Portfolio) */}
      <div className="flex flex-col md:flex-row">
        {/* Left empty space */}
        <div className="hidden md:block md:w-[525px]"></div>

        {/* Right content */}
        <div className="flex-1 md:pr-16 px-4 md:px-0">
          <div className="max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {blogPosts.map((post) => (
                <div key={post.id} className="group cursor-pointer">
                  {/* Image Container */}
                  <div
                    className="relative rounded-t-lg overflow-hidden"
                    style={{
                      aspectRatio: post.width / post.height,
                    }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="bg-black p-3 md:p-4 rounded-b-lg">
                    <p className="text-[#747474] text-xs mb-2">
                      {post.category} | {post.date}
                    </p>

                    <h3 className="text-white font-bold text-sm md:text-[18px] mb-2 md:mb-3 leading-snug group-hover:text-[#f59e0b] transition">
                      {post.title}
                    </h3>

                    <p className="text-[#979797] text-xs md:text-[14px] mb-3 md:mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <p className="text-white text-xs md:text-[14px]">
                      {post.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
