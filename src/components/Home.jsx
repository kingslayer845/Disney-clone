import React, { useEffect } from "react";
import styled from "styled-components";
import { homeBg } from "../assets";
import ImageSlider from "./ImageSlider";
import Recommends from "./Recommends";
import { useDispatch, useSelector } from "react-redux";
import Viewers from "./Viewers";
import { collection, getDocs } from "firebase/firestore";
import database from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import Trending from "./Trending";
import NewDisney from "./NewDisney";
import Originals from "./Original";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    const readData = async function () {
      const querySnapshot = await getDocs(collection(database, "movies"));
      querySnapshot.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    };
    readData();
  }, [userName]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

const Container = styled.main`
  padding: 0 calc(3.5vw + 5px);
  height: 100vh;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  position: relative;
  top: 75px;
  &::after {
    background: url(${homeBg}) center no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;
export default Home;
