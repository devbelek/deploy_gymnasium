"use client";
import { useGetTeachersQuery } from "@/redux/api/teachers";
import scss from "./TeachersPage.module.scss";
import TeachersMainContent from "./teachers/TeachersMainContent/TeachersMainContent";
import TeacherDetailedContent from "./teachers/TeacherDetailedContent/TeacherDetailedContent";

const TeachersPage = () => {
  const { data, error, isLoading } = useGetTeachersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <div className={scss.content}>
        <TeachersMainContent />
      </div>
    </>
  );
};

export default TeachersPage;
