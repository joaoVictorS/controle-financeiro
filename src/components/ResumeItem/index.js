import { Container, Header, HeaderTitle, Total } from './styles';

// eslint-disable-next-line react/prop-types
function ResumeItem({ title, Icon, value }) {
  return (
    <Container>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        <Icon />
      </Header>
      <Total>{value}</Total>
    </Container>
  );
}

export default ResumeItem;
