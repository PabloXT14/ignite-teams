import { useState } from 'react'
import { FlatList } from 'react-native'

import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { ButtonIcon } from '@/components/ButtonIcon'
import { Input } from '@/components/Input'
import { Filter } from '@/components/Filter'
import { PlayerCard } from '@/components/PlayerCard'

import { Container, Form, HeaderList, NumberOfPlayers } from './styles'
import { ListEmpty } from '@/components/ListEmpty'
import { Button } from '@/components/Button'

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

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length <= 0 && { flex: 1 },
        ]}
        ListEmptyComponent={<ListEmpty message="Não há pessoas neste time" />}
      />

      <Button title="Remover turma" type="secondary" />
    </Container>
  )
}
