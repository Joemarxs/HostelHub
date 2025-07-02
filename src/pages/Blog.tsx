
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Tips for Finding the Perfect Student Accommodation",
      excerpt: "A comprehensive guide to help students find safe, affordable, and comfortable housing while studying in Kenya.",
      author: "Sarah Wanjiku",
      date: "March 15, 2024",
      category: "Student Tips",
      readTime: "5 min read"
    },
    {
      title: "Understanding Kenyan University Towns: A Student's Guide",
      excerpt: "Explore the best university towns in Kenya and what makes each location unique for student living.",
      author: "James Mwangi",
      date: "March 10, 2024", 
      category: "Location Guide",
      readTime: "8 min read"
    },
    {
      title: "Budgeting for University: Housing Costs in Kenya",
      excerpt: "Learn how to budget effectively for accommodation costs across different Kenyan cities and universities.",
      author: "Grace Akinyi",
      date: "March 5, 2024",
      category: "Finance",
      readTime: "6 min read"
    },
    {
      title: "Safety First: What to Look for in Student Accommodation",
      excerpt: "Essential safety features and red flags to watch out for when choosing your student housing.",
      author: "Michael Ochieng",
      date: "February 28, 2024",
      category: "Safety",
      readTime: "7 min read"
    }
  ];

  const categories = ["All", "Student Tips", "Location Guide", "Finance", "Safety", "University Life"];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            HostelHub Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tips, guides, and insights to help you make the most of your student life in Kenya
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
