const links = ["home", "about", "work", "skills", "contacts"];

export default function NavgationDots({ active }) {
  return (
    <div className="app__navigation">
      {links.map((item, index) => (
        <a
          className="app__navigation-dot"
          key={index}
          href={`#${item}`}
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
}
