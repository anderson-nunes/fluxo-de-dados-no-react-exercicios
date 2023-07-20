import {
  ProfileBio,
  ProfileImage,
  ProfileName,
  ProfileWrapper,
} from "./ProfileMenu.styled";

const ProfileMenu = ({ name, bio, image }) => {

  return (
    <ProfileWrapper>
      <ProfileImage src={image} />
      <ProfileName>{name}</ProfileName>
      <ProfileBio>{bio}</ProfileBio>
    </ProfileWrapper>
  );
};

export default ProfileMenu;