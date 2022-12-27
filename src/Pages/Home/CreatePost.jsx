import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const CreatePost = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handlePost = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=f6f4f20b858476e04e59da4c1ede396a`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const postInfo = {
            poster: user?.displayName,
            posterImg: user?.photoURL,
            posterEmail: user?.email,
            date: new Date(),
            post: data.textarea,
            postedImg: imageData.data.url,
          };
          fetch(`http://localhost:5000/posts`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(postInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Post created successfully");
              }
              console.log(data);
            });
        }
      });
  };
  return (
    <section className="h-screen">
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto rounded-md ">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              {user?.email ? (
                <img src={user?.photoURL} alt="" className="object-cover w-12 h-12 rounded-full " />
              ) : (
                ""
              )}
            </div>
            <div>
              <h4 className="font-semibold text-black">{user?.displayName}</h4>
              <span className="text-xs text-gray-600">{user?.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2"></div>
        </div>
        <div className="p-4 space-y-2 text-sm">
          <form onSubmit={handleSubmit(handlePost)} className="relative">
            <div className="border border-base-100 rounded-md">
              <textarea
                type=""
                {...register("textarea", { required: true })}
                placeholder={`What's on your mind, ${user?.displayName.split(" ")[0]} ?`}
                className="textarea bg-white text-gray-700 text-xl w-full h-36 outline-none"
              />{" "}
              <br />
              <input
                type="file"
                name="image"
                {...register("image", { required: true })}
                className="none text-center rounded-full p-3 text-sm mt-2  cursor-pointer"
              />{" "}
              <br />
            </div>
            <input
              type="submit"
              value="Post"
              className="w-full text-xl px-2 py-2 mt-5 rounded-md font-semibold bg-base-300 hover:bg-base-200 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
