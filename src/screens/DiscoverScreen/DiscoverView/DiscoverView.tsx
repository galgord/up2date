import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Box from '@app/components/Box'
import Container from '@app/components/Container'
import theme from '@app/utils/theme'
import { CategoryHeader, CategoryPill, Header, ProductListItem, PromotionCard } from '../components'
import SearchBar from '../components/SearchBar/SearchBar'

const tempData = [
  { name: 'Crazy Fruits', starRating: 3 },
  { name: 'Fruit Shop', starRating: 4 },
  { name: 'Veggie Mart', starRating: 5 },
  { name: 'Healthy Foods', starRating: 2 },
]

const tempPills = [
  { name: 'Fruits' },
  { name: 'Vegetables' },
  { name: 'Meat' },
  { name: 'Dairy' },
  { name: 'Bakery' },
  { name: 'Drinks' },
  { name: 'Snacks' },
  { name: 'Frozen' },
  { name: 'Household' },
]
const DiscoverView = () => (
  <SafeAreaView edges={['top']} style={{ backgroundColor: theme.colors.background }}>
    <Container backgroundColor="background">
      <ScrollView contentContainerStyle={{ gap: 16 }}>
        <Header />
        <SearchBar />
        <PromotionCard />
        <CategoryHeader headerText="Popular Stores" />
        <FlatList
          data={tempData}
          style={{ flexGrow: 0 }}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <Box width={8} />}
          renderItem={({ item }) => <ProductListItem {...item} />}
          horizontal
        />
        <CategoryHeader headerText="Browse by category" />
        <FlatList
          data={tempPills}
          renderItem={({ item }) => <CategoryPill {...item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          ItemSeparatorComponent={() => <Box height={8} />}
          contentContainerStyle={{ flex: 1 }}
        />
      </ScrollView>
    </Container>
  </SafeAreaView>
)

export default DiscoverView
