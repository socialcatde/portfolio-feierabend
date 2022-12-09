export const fetchData = async () => {
  const { client } = usePrismic();
  const [
    { data: werke },
    { data: chronologie },
    { data: cv },
    { data: projekte },
    { data: projektkategorien },
    { data: werktags },
  ] = await Promise.all([
    useAsyncData("werk", () => client.getAllByType("werk")),
    useAsyncData("chronologie", () => client.getSingle("chronologie")),
    useAsyncData("cv", () => client.getSingle("cv")),
    useAsyncData("projekt", () =>
      client.getAllByType("projekt", {
        orderings: [
          {
            field: "my.projekt.projektname",
            direction: "asc",
          },
        ],
      })
    ),
    useAsyncData("projektkategorien", () =>
      client.getAllByType("projektkategorie", {
        orderings: [
          {
            field: "my.projektkategorie.projektkategorie_name",
            direction: "asc",
          },
        ],
      })
    ),
    useAsyncData("werktags", () => client.getAllByTag("film")),
  ]);

  return {
    werke,
    chronologie,
    cv,
    projekte,
    projektkategorien,
    werktags,
  };
};

export default fetchData;
