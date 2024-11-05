import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

import { groupCreate } from '@/storage/group/group-create'

import { Container, Content, Icon } from './styles'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleNewGroup() {
    if (group.trim().length === 0) return

    try {
      await groupCreate(group)
      navigation.navigate('players', { group })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  )
}
