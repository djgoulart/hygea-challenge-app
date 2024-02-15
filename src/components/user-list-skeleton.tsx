import React from 'react'
import { Center, Skeleton } from 'native-base'

export function UserListSkeleton() {
  return (
    <>
      <Center overflow="hidden" rounded="md" h={6}>
        <Skeleton h={6} startColor="gray.500" endColor="gray.600" />
      </Center>
      <Center overflow="hidden" rounded="md" h={6} my={2}>
        <Skeleton h={6} startColor="gray.500" endColor="gray.600" />
      </Center>
      <Center overflow="hidden" rounded="md" h={6}>
        <Skeleton h={6} startColor="gray.500" endColor="gray.600" />
      </Center>
    </>
  )
}
