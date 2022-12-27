import { useQuery } from "@tanstack/react-query";
import MediaCard from "./MediaCard";

const Media = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/posts`);
      const data = res.json();
      return data;
    },
  });
  console.log(posts);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white px-20 py-6">
      {posts?.map((pst) => (
        <MediaCard key={pst._id} pst={pst}></MediaCard>
      ))}
    </div>
  );
};

export default Media;
