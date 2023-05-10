import { useState } from 'react';
import { Container, Input, InputContent, Label } from './styles';

function Form() {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [expense, setExpense] = useState(false);

  return (
    <Container>
      <InputContent>
        <Label>Descrição</Label>
        <Input value="desc" onChange={(e) => setDesc(e.target.value)} />
      </InputContent>
    </Container>
  );
}

export default Form;
