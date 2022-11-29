const useKlickKreisel = () => {
  const isClicked = useState("clicked", () => false);
  const currentProject = useState("project", () => "");
  const toggleKreiselStyle = (event, projektname) => {
    currentProject.value = projektname;
    isClicked.value = !isClicked.value;
  };
  const isActive = (currProj, clickedProj) => {
    if (currProj == clickedProj) {
      return true;
    }
  };
  const isWerkActive = (currKategorie, tagsList) => {
    if (tagsList.includes(currKategorie)) {
      return true;
    }
  };

  return {
    isClicked,
    currentProject,
    toggleKreiselStyle,
    isActive,
    isWerkActive,
  };
};

export default useKlickKreisel;
