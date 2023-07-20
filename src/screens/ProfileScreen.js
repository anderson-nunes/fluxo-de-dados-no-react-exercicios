import { useState } from "react";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import { ScreenContainer } from "./ProfileScreen.styled";

function ProfileScreen() {
  const [name, setName] = useState("ASTRODEV");
  const [bio, setBio] = useState("Dev full stack");
  const [image, setImage] = useState("");

  const clearInputs = (event) => {
    event.target.name.value = ""; // limpando o input
    event.target.bio.value = "";
    event.target.imageUrl.value = "";
    // setName("")  => limpando o estado
  };

  const submit = (event) => {
    event.preventDefault();

    setName(event.target.name.value);
    setBio(event.target.bio.value);
    setImage(event.target.imageUrl.value);
    clearInputs(event);
  };

  return (
    <ScreenContainer>
      <ProfileMenu
        name={name}
        bio={bio}
        image={image} />

      <ProfileForm submit={submit} />
    </ScreenContainer>
  );
}

export default ProfileScreen;