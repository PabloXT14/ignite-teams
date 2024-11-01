import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'

import { Container, Form } from './styles'
import { ButtonIcon } from '@/components/ButtonIcon'
import { Input } from '@/components/Input'
import { Filter } from '@/components/Filter'

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nova da Turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </Form>

      <Filter title="Time A" isActive />
    </Container>
  )
}
