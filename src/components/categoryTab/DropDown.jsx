import MenuItems from "./MenuItems";
const Dropdown = ({ submenus, dropdown, depthLevel, handleChoosen }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus?.map((submenu, index) => (
        <MenuItems
          items={submenu}
          depthLevel={depthLevel}
          key={index}
          handleChoosen={handleChoosen}
        />
      ))}
    </ul>
  );
};

export default Dropdown;