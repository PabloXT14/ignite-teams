import { useState } from 'react'
import { FlatList } from 'react-native'

import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { ButtonIcon } from '@/components/ButtonIcon'
import { Input } from '@/components/Input'
import { Filter } from '@/components/Filter'

import { Container, Form, HeaderList, NumberOfPlayers } from './styles'

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<string[]>([])

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

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
    </Container>
  )
}
