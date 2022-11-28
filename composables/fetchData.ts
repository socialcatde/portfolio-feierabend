export const fetchData = async () => {
  const { client } = usePrismic();
  const [
    { data: werke },
    { data: chronologie },
    { data: projekte },
    { data: projektkategorien },
  ] = await Promise.all([
    useAsyncData("werk", () => client.getAllByType("werk")),
    useAsyncData("chronologie", () => client.getSingle("chronologie")),
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
  ]);

  return { werke, chronologie, projekte, projektkategorien };
};

export default fetchData;
