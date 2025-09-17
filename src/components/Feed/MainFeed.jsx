import PostInput from "./PostInput";
import Postcard from "./Postcard"


const posts = [
  {
    id: 1,
    name: "Ava Thompson",
    designation: "UX Design Cohort",
    profile: "https://randomuser.me/api/portraits/women/65.jpg",
    caption: "Excited to start my new internship!",
    post: "https://static01.nyt.com/images/2025/02/10/multimedia/00nat-collegeforall-01-hpzf/00nat-collegeforall-01-hpzf-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    like: 10,
    comments: 2,
    className: "custom-class",
  },
  {
    id: 2,
    name: "Roma Thompson",
    designation: "Frontend Designer",
    profile: "https://randomuser.me/api/portraits/men/65.jpg",
    caption: "Loving the new React 18 features!",
    post: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    like: 15,
    comments: 5,
    className: "custom-class",
  },
  {
    id: 3,
    name: "Ethan Lee",
    designation: "Backend Developer",
    profile: "https://randomuser.me/api/portraits/men/35.jpg",
    caption: "API performance optimization tips.",
    post: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    like: 8,
    comments: 3,
  },
  {
    id: 4,
    name: "Sara Kim",
    designation: "Product Manager",
    profile: "https://randomuser.me/api/portraits/women/44.jpg",
    caption: "Sprint planning for the next quarter.",
    post: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    like: 20,
    comments: 10,
  },
  {
    id: 5,
    name: "David Harris",
    designation: "QA Engineer",
    profile: "https://randomuser.me/api/portraits/men/81.jpg",
    caption: "Test automation best practices.",
    post: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    like: 5,
    comments: 1,
  },
  {
    id: 6,
    name: "Linda Garcia",
    designation: "UI/UX Designer",
    profile: "https://randomuser.me/api/portraits/women/22.jpg",
    caption: "New wireframe designs for mobile app.",
    post: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    like: 17,
    comments: 7,
  },
  {
    id: 7,
    name: "Michael Brown",
    designation: "DevOps Specialist",
    profile: "https://randomuser.me/api/portraits/men/77.jpg",
    caption: "CI/CD pipeline upgrades completed.",
    post: "https://images.unsplash.com/photo-1515165562835-c34c10767e15?auto=format&fit=crop&w=800&q=80",
    like: 9,
    comments: 2,
  },
  {
    id: 8,
    name: "Jessica Wilson",
    designation: "Content Strategist",
    profile: "https://randomuser.me/api/portraits/women/48.jpg",
    caption: "Planning content calendar for the year.",
    post: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    like: 12,
    comments: 6,
  },
  {
    id: 9,
    name: "Chris Evans",
    designation: "Marketing Manager",
    profile: "https://randomuser.me/api/portraits/men/44.jpg",
    caption: "Launching the new campaign next week!",
    post: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    like: 18,
    comments: 9,
  },

];


export default function MainFeed() {
  return (
    <>
      <PostInput />
      {
        posts.map((post) => (
          <Postcard key={post.id} {...post} />
        ))}
    </>
  )
}