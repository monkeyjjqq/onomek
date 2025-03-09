import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PostGrid from "./components/PostGrid";
import usePosts from "./hooks/usePosts";
import Post from "./components/Post";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const { posts, error, setSearchText, currentPage, setCurrentPage } =
    usePosts();
  const onSearch = (searchText: string) => {
    setSearchText(searchText);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Router>
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
            <Routes>
              <Route path="/:service/user/:user/post/:id" element={<Post />} />
              <Route
                path="/"
                element={
                  <PostGrid
                    posts={posts}
                    handlePageChange={handlePageChange}
                    currentPage={currentPage}
                    error={error}
                  />
                }
              />
            </Routes>
          </GridItem>
        </Grid>
      </Router>
    </>
  );
}

export default App;
