"use client";
import { useGetAccountQuery } from "@/redux/api/profile";
import scss from "./Profile.module.scss";
import { skipToken } from "@reduxjs/toolkit/query";
import { useEffect } from "react";

const Profile = () => {
  // Определение условия для получения профиля
  const shouldFetch = true;
  const { data, error, isLoading } = useGetAccountQuery(
    shouldFetch ? null : skipToken
  );

  // async function getData() {
  //   const url = "https://www.3-gymnasium.kg/api/profile/";
  //   const response = await fetch(url);

  //   const json = await response.json();
  //   console.log(json, "new profile");
  // }
  // useEffect(() => {
  //   getData();
  // }, []);
  // // Логирование данных профиля
  // console.log(data, "data");

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
