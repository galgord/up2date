import React from 'react'
import Box from '@app/components/Box'
import Icon from '@app/components/Icon'
import TextInput from '@app/components/TextInput'

const SearchBar: React.FC = () => (
  <Box
    flexDirection="row"
    p="m"
    justifyContent="space-between"
    backgroundColor="surfaceContainerHigh"
    borderRadius="l">
    <Box flexDirection="row" gap="m" flex={1}>
      <Icon name="filter-variant" size={24} />
      <TextInput flex={1} placeholder="Search for your product" />
    </Box>
    <Icon name="magnify" size={24} />
  </Box>
)

export default SearchBar
