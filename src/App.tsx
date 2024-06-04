import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PostGrid from "./components/PostGrid";
import usePosts from "./hooks/usePosts";

function App() {
  const { posts, error, setSearchText } = usePosts();
  const onSearch = (searchText: string) => {
    setSearchText(searchText);
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav"  "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={onSearch} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">aside</GridItem>
        </Show>
        <GridItem area="main">
          <PostGrid posts={posts} error={error} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
