import { useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { ButtonIcon } from '@/components/ButtonIcon'
import { Input } from '@/components/Input'
import { Filter } from '@/components/Filter'
import { PlayerCard } from '@/components/PlayerCard'

import { Container, Form, HeaderList, NumberOfPlayers } from './styles'
import { ListEmpty } from '@/components/ListEmpty'
import { Button } from '@/components/Button'
import { playerAddByGroup } from '@/storage/player/player-add-by-group'
import { AppError } from '@/utils/AppError'

type RouteParams = {
  group: string
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<string[]>([])

  const route = useRoute()

  const { group } = route.params as RouteParams

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        'Nova pessoa',
        'Informe o nome da pessoa para adicionar.'
      )
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group)
      setNewPlayerName('')
    } catch (error) {
      console.log(error)

      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message)
      } else {
        Alert.alert('Nova pessoa', 'Não foi possível adicionar.')
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          placeholder="Nome do participante"
          autoCorrect={false}
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
