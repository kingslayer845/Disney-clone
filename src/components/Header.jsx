import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import {
  homeIcon,
  logo,
  moviesIcon,
  originalsIcon,
  searchIcon,
  seriesIcon,
  watchListIcon,
} from "../assets";
import { auth, provider, signOut } from "../firebase";
import { useNavigate } from "react-router-dom";
import { setSignOutState, setUserLoginDetails } from "../features/user/userSlice";

function Header() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.name);
  const userPhoto = useSelector((state) => state.user.photo);
  let navigate = useNavigate();
  function handleAuth() {
    if (!username) {
      signInWithPopup(auth, provider)
        .then((result) => setUser(result.user))
        .catch((error) => console.log(error));
    } else
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((error) => alert(error));
  }

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, []);

  function setUser(data) {
    dispatch(
      setUserLoginDetails({
        name: data.displayName,
        email: data.email,
        photo: data.photoURL,
      })
    );
  }
  return (
    <Nav>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
      {!username ? (
        <Login onClick={handleAuth}>login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src={homeIcon} alt="" />
              <span>HOME</span>
            </a>
            <a href="/home">
              <img src={searchIcon} alt="" />
              <span>Search</span>
            </a>
            <a href="/home">
              <img src={watchListIcon} alt="" />
              <span>WatchList</span>
            </a>
            <a href="/home">
              <img src={originalsIcon} alt="" />
              <span>Originals</span>
            </a>
            <a href="/home">
              <img src={moviesIcon} alt="" />
              <span>Movies</span>
            </a>
            <a href="/home">
              <img src={seriesIcon} alt="" />
              <span>Series</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImage src={userPhoto} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
}
const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 10;
`;
const Logo = styled.a`
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  flex-flow: row nowrap;
  height: 100%;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
  }
  img {
    height: 20px;
    width: 20px;
    margin-right: 3px;
  }
  span {
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    padding: 2px 0;
    white-space: nowrap;
    position: relative;
    text-transform: uppercase;
  }
  span:after {
    opacity: 0;
    content: "";
    display: block;
    background-color: #fff;
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -6px;
    left: 0;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    visibility: hidden;
  }
  span:hover::after {
    transform: scaleX(1);
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const Login = styled.a`
  padding: 8px 16px;
  background-color: rgb(0, 0, 0.6);
  border: 1px solid #f9f9f9;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 4px;
  transition: all 0.2s ease;
  &:hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`;
const UserImage = styled.img`
  width: 40px;
  border-radius: 50%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background: rgb(19, 19, 19);
  padding: 10px;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  letter-spacing: 2px;
  white-space: nowrap;
  opacity: 0;
  font-size: 14px;
  transition: all 0.2s;
  width: 100px;
  text-align: center;
`;
const SignOut = styled.div`
  position: relative;
  cursor: pointer;
  &:hover div {
    opacity: 1;
  }
`;
export default Header;
