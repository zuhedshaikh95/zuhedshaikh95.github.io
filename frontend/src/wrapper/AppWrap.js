import { NavigationDots, SocialMedia } from "../components";

const AppWrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />
        </div>

        <NavigationDots className="dots" active={idName} />
      </div>
    );
  };

export default AppWrapper;
