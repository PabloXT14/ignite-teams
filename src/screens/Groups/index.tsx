import { useState, useCallback } from 'react'
import { Alert, FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { GroupCard } from '@/components/GroupCard'
import { ListEmpty } from '@/components/ListEmpty'
import { Button } from '@/components/Button'
import { Loading } from '@/components/Loading'

import { groupGetAll } from '@/storage/group/group-get-all'

import { Container } from './styles'

export function Groups() {
  const [isLoading, setIsLoading] = useState(false)
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)

      const data = await groupGetAll()
      setGroups(data)
    } catch (error) {
      console.log(error)
      Alert.alert('Turmas', 'Nao foi possível carregar as turmas.')
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, [])
  )

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={
            groups.length === 0 ? { flex: 1 } : { gap: 12 }
          }
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  )
}
