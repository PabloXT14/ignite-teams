import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppError } from '@/utils/AppError'

import type { PlayerStorageDTO } from './player-storage-dto'
import { PLAYER_COLLECTION } from '../storage-config'
import { playersGetByGroup } from './players-get-by-group'

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const players = await playersGetByGroup(group)

    const playerAlreadyExists = players.some(
      player => player.name === newPlayer.name
    )

    if (playerAlreadyExists)
      throw new AppError('Essa pessoa já está adicionada em um time aqui.')

    const storage = JSON.stringify([...players, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw error
  }
}
