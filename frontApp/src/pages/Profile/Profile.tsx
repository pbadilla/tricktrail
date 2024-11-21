import React from "react";
import { useForm } from "react-hook-form";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold text-gray-800 text-center mb-4">Profile</h1>

      {/* Avatar Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Avatar"
          className="w-24 h-24 rounded-full shadow-md mb-4"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Upload New Avatar
        </button>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Name must be at least 3 characters long" },
            })}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Bio Field */}
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
            Bio
          </label>
          <textarea
            id="bio"
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
              errors.bio ? "border-red-500" : "border-gray-300"
            }`}
            {...register("bio", {
              required: "Bio is required",
              maxLength: { value: 200, message: "Bio must be 200 characters or less" },
            })}
          ></textarea>
          {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
