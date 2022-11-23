const indexMenu = () => {
  const isOpen = useState("opened", () => false);
  const openTheMenu = () => {
    isOpen.value = !isOpen.value;
  };

  return {
    openTheMenu,
    isOpen,
  };
};

export default indexMenu;
