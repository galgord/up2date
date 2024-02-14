import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { set } from 'react-hook-form'
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete'
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet'
import { FlashList } from '@shopify/flash-list'
import Box from '@app/components/Box'
import Icon from '@app/components/Icon'
import { IconNames } from '@app/components/Icon/Icon'
import Text from '@app/components/Text'
import theme from '@app/utils/theme'
import AddressListItem from '../AddressListItem/AddressListItem'

const height = Dimensions.get('window').height
export const addressBottomSheetModalRef = React.createRef<BottomSheetModal>()
const AddressBottomSheet: React.FC = () => {
  const googlePlacesAutocompleteRef = React.createRef<GooglePlacesAutocompleteRef>()
  const [tempData, setTempData] = useState<
    {
      id: string
      iconName: IconNames
      label: string
    }[]
  >([])
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        backdropComponent={(backdropProps) => (
          <BottomSheetBackdrop
            {...backdropProps}
            disappearsOnIndex={-1}
            enableTouchThrough={false}
          />
        )}
        backgroundStyle={{ backgroundColor: theme.colors.background, borderRadius: 42 }}
        enableDynamicSizing
        ref={addressBottomSheetModalRef}>
        <BottomSheetView style={{ gap: 16, padding: 16, minHeight: height / 2 }}>
          <Text variant="title/large" textAlign="center">
            Add or pick one address
          </Text>

          <GooglePlacesAutocomplete
            ref={googlePlacesAutocompleteRef}
            placeholder="Add your address"
            renderLeftButton={() => (
              <Box top={12} left={16} zIndex={1} position="absolute">
                <Icon name="map-marker-outline" size={24} />
              </Box>
            )}
            onPress={(data) => {
              googlePlacesAutocompleteRef.current?.clear()
              setTempData((prev) => [
                ...prev,
                {
                  id: data.place_id,
                  iconName: 'check' as IconNames,
                  label: data.description,
                },
              ])
            }}
            styles={{
              container: {
                flex: 0,
              },
              poweredContainer: {
                display: 'none',
              },
              textInput: {
                height: 48,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: 'transparent',
                backgroundColor: theme.colors.surface,
                paddingRight: 16,
                paddingLeft: 48,
                fontSize: 14,
                fontFamily: 'MontserratAlternates-Regular',
              },

              row: {
                backgroundColor: theme.colors.surface,
                marginBottom: 4,
                borderRadius: 16,
                borderBottomColor: theme.colors.secondary,
              },
            }}
            query={{
              key: '',
              language: 'en',
            }}
          />
          <Box flex={1}>
            <AddressListItem iconName="map-outline" label="Current Location" />
            <FlashList
              estimatedItemSize={48}
              data={tempData}
              renderItem={({ item }) => (
                <AddressListItem
                  iconName={item.iconName}
                  label={item.label}
                  textColor="inversePrimary"
                  iconColor="inversePrimary"
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </Box>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
}

export default AddressBottomSheet
