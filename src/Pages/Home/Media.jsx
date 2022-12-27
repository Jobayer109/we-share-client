import { useQuery } from "@tanstack/react-query";
import { FadeLoader } from "react-spinners";
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
    return (
      <FadeLoader
        color="#36d7b7"
        style={{
          position: "fixed",
          top: "35%",
          left: "48%",
          paddingTop: "100px",
          paddingBottom: "200px",
        }}
      />
    );
  }

  return (
    <section className="bg-white px-20 py-6">
      <h3 className="text-3xl text-base-100 font-mono">Total posts: {posts?.length}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10">
        {posts?.map((pst) => (
          <MediaCard key={pst._id} pst={pst}></MediaCard>
        ))}
      </div>
    </section>
  );
};

export default Media;
