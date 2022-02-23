import { ContainerFlexStyled } from "./styled/Container/Container.styled";

interface Props {
  title: string;
}
const Notification: React.FC<{ title: string }> = ({ title }: Props) => {
  return (
    <ContainerFlexStyled justifyContent="center">
      <p>{title}</p>
    </ContainerFlexStyled>
  );
};
export default Notification;
