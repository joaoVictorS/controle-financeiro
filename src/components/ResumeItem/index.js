import { Container, Header, HeaderTitle } from './styles';
import * as C from './styles';

// eslint-disable-next-line react/prop-types
function ResumeItem({ title, Icon, value }) {
  return (
    <Container>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        <Icon />
      </Header>
      <C.Total>{value}</C.Total>
    </Container>
  );
}

export default ResumeItem;
