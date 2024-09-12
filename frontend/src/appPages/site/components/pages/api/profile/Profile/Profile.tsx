"use client";
import { useGetAccountQuery } from "@/redux/api/profile";
import scss from "./Profile.module.scss";
import { skipToken } from "@reduxjs/toolkit/query";

const Profile = () => {
  // Определение условия для получения профиля
  const shouldFetch = true;
  const { data, error, isLoading } = useGetAccountQuery(
    shouldFetch ? null : skipToken
  );

  // Логирование данных профиля
  console.log(data, "data");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div className={scss.Profile}>
      <div className="container">
        <div className={scss.content}>
          <h1>Profile</h1>
          <p>User: {data?.user}</p>
          <p>About: {data?.about}</p>
          <img src={data?.avatar || "/default-avatar.png"} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
