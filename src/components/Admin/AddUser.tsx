import { FC } from "react";

const AddUser: FC = () => {
  return (
    <form
      className=" bg-elevated-base w-96 rounded-md h-96 p-4 space-y-4 relative"
      action=""
    >
      <div className="text-center">
        <h1 className="text-white text-2xl">Add Member</h1>
        <p className="text-sub-gray">
          After adding a user to the system be sure to add thme to the
          SpotifyDev list
        </p>
      </div>
      <label className="text-white block">
        User Email:
        <input
          type="text"
          className="block px-2 py-1 mt-2 rounded bg-transparent border-sub-gray border w-full"
        />
      </label>
      <button className="absolute bottom-4 px-4 py-1 bg-primary-green text-white bg-opacity-80 hover:bg-opacity-100 transition-colors rounded-md">
        Add User
      </button>
    </form>
  );
};

export default AddUser;
