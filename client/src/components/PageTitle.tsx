import { ContainerFlexStyled } from "./styled/Container/Container.styled";

interface Props {
  title: string;
}
const PageTitle: React.FC<{ title: string }> = ({ title }: Props) => {
  return (
    <ContainerFlexStyled justifyContent="center">
      <p>{title}</p>
    </ContainerFlexStyled>
  );
};
export default PageTitle;
