import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import Box from '@app/components/Box'
import Container from '@app/components/Container'
import theme from '@app/utils/theme'
import { CategoryHeader, CategoryPill, Header, ProductListItem, PromotionCard } from '../components'
import AddressBottomSheet from '../components/AddressBottomSheet/AddressBottomSheet'
import SearchBar from '../components/SearchBar/SearchBar'

const tempData = [
  { id: 1, name: 'Crazy Fruits', starRating: 3, imageUrl: 'https://picsum.photos/200/300' },
  { id: 2, name: 'Fruit Shop', starRating: 4, imageUrl: 'https://picsum.photos/200/300' },
  { id: 3, name: 'Veggie Mart', starRating: 5, imageUrl: 'https://picsum.photos/200/300' },
  { id: 4, name: 'Healthy Foods', starRating: 2, imageUrl: 'https://picsum.photos/200/300' },
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
          renderItem={({ item }) => (
            <ProductListItem
              {...item}
              onPress={() => {
                router.push({ pathname: `/product/:id`, params: item })
              }}
            />
          )}
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
