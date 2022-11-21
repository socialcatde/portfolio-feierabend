const useKlickKreisel = () => {
    const isClicked = useState("clicked", () => false);
    const currentProject = useState("project", () => "");
    const toggleKreiselStyle =  (event, projektname) => {
        currentProject.value = projektname
        isClicked.value = !isClicked.value
    }
    const isActive = (currProj, clickedProj) => {
        if(currProj == clickedProj) {
            return true
        }
    }

    return {
        isClicked,
        currentProject,
        toggleKreiselStyle,
        isActive
    };
};

export default useKlickKreisel;