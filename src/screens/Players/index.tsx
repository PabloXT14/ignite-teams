import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'

import { Container } from './styles'
import { Input } from '@/components/Input'

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nova da Turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Input placeholder="Nome do participante" />
    </Container>
  )
}
