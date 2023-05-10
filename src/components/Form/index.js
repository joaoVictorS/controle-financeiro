import { useState } from 'react';
import { Container, Input, InputContent, Label, RadioGroup } from './styles';
import * as C from './styles';

function Form({ handleAdd }) {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [isExpense, setExpense] = useState(false);

  const generateId = () => Math.round(Math.random() * 100);

  const handleSave = () => {
    if (!desc || !amount) {
      // eslint-disable-next-line no-alert
      alert('Informe a descrição e o valor!');
    } else if (amount < 1) {
      // eslint-disable-next-line no-alert
      alert('O valor tem que ser positivo!');
    }

    const transaction = {
      id: generateId(),
      desc,
      amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setAmount('');
    setDesc('');
  };

  return (
    <Container>
      <InputContent>
        <Label>Descrição</Label>
        <Input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </InputContent>
      <InputContent>
        <Label>Valor</Label>
        <Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
      </InputContent>
      <RadioGroup>
        <Input
          type="radio"
          id="rIncome"
          defaultChecked
          name="group1"
          onChange={() => setExpense(!isExpense)}
        />
        <Label htmlFor="rIncome">Entrada</Label>
        <Input type="radio" id="rExpenses" name="group1" onChange={() => setExpense(!isExpense)} />
        <Label htmlFor="rExpenses">Saída</Label>
      </RadioGroup>
      <C.Button onClick={handleSave}>ADICIONAR</C.Button>
    </Container>
  );
}

export default Form;
