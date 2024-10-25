import scss from "./Loader.module.scss";
const Loader = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.loader}></div>
    </div>
  );
};

export default Loader;
