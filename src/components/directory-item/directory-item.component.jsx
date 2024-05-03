import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./directory-item.styles";

const DirectoryItem = ({ category: { id, imageUrl, title, route } }) => {
  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />

      <Body to={route}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
