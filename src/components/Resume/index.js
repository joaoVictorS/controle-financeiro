import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa';
import ResumeItem from '../ResumeItem';
import { Container } from './styles';

function Resume() {
  return (
    <Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="100" />
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="100" />
      <ResumeItem title="Total" Icon={FaDollarSign} value="100" />
    </Container>
  );
}

export default Resume;
