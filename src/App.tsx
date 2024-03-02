import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="indigo">
        Navigation bar
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="violet">
          Aside pane
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main Body
      </GridItem>
    </Grid>
  );
};

export default App;
