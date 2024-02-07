/* eslint-disable @typescript-eslint/array-type */
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: any; output: any }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: any; output: any }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any }
  /** A date wihout time information */
  Date: { input: any; output: any }
  /** A date and time */
  Datetime: { input: any; output: any }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: any; output: any }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any }
  /** A time without date information */
  Time: { input: any; output: any }
  /** A universally unique identifier */
  UUID: { input: any; output: any }
}

export enum AppStateStatus {
  ACTIVE = 'ACTIVE',
  BACKGROUND = 'BACKGROUND',
  EXTENSION = 'EXTENSION',
  INACTIVE = 'INACTIVE',
  UNKNOWN = 'UNKNOWN',
}

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  readonly eq?: InputMaybe<Scalars['BigFloat']['input']>
  readonly gt?: InputMaybe<Scalars['BigFloat']['input']>
  readonly gte?: InputMaybe<Scalars['BigFloat']['input']>
  readonly in?: InputMaybe<ReadonlyArray<Scalars['BigFloat']['input']>>
  readonly is?: InputMaybe<FilterIs>
  readonly lt?: InputMaybe<Scalars['BigFloat']['input']>
  readonly lte?: InputMaybe<Scalars['BigFloat']['input']>
  readonly neq?: InputMaybe<Scalars['BigFloat']['input']>
}

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  readonly eq?: InputMaybe<Scalars['BigInt']['input']>
  readonly gt?: InputMaybe<Scalars['BigInt']['input']>
  readonly gte?: InputMaybe<Scalars['BigInt']['input']>
  readonly in?: InputMaybe<ReadonlyArray<Scalars['BigInt']['input']>>
  readonly is?: InputMaybe<FilterIs>
  readonly lt?: InputMaybe<Scalars['BigInt']['input']>
  readonly lte?: InputMaybe<Scalars['BigInt']['input']>
  readonly neq?: InputMaybe<Scalars['BigInt']['input']>
}

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  readonly eq?: InputMaybe<Scalars['Boolean']['input']>
  readonly is?: InputMaybe<FilterIs>
}

export type Category = Node & {
  readonly __typename?: 'Category'
  readonly active: Scalars['Boolean']['output']
  readonly createdAt: Scalars['Datetime']['output']
  readonly description?: Maybe<Scalars['String']['output']>
  readonly id: Scalars['BigInt']['output']
  readonly marketCategoryCollection?: Maybe<MarketCategoryConnection>
  readonly name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  readonly nodeId: Scalars['ID']['output']
}

export type CategoryMarketCategoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MarketCategoryFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<MarketCategoryOrderBy>>
}

export type CategoryConnection = {
  readonly __typename?: 'CategoryConnection'
  readonly edges: ReadonlyArray<CategoryEdge>
  readonly pageInfo: PageInfo
}

export type CategoryDeleteResponse = {
  readonly __typename?: 'CategoryDeleteResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<Category>
}

export type CategoryEdge = {
  readonly __typename?: 'CategoryEdge'
  readonly cursor: Scalars['String']['output']
  readonly node: Category
}

export type CategoryFilter = {
  readonly active?: InputMaybe<BooleanFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  readonly and?: InputMaybe<ReadonlyArray<CategoryFilter>>
  readonly createdAt?: InputMaybe<DatetimeFilter>
  readonly description?: InputMaybe<StringFilter>
  readonly id?: InputMaybe<BigIntFilter>
  readonly name?: InputMaybe<StringFilter>
  readonly nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  readonly not?: InputMaybe<CategoryFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  readonly or?: InputMaybe<ReadonlyArray<CategoryFilter>>
}

export type CategoryInsertInput = {
  readonly active?: InputMaybe<Scalars['Boolean']['input']>
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly description?: InputMaybe<Scalars['String']['input']>
  readonly name?: InputMaybe<Scalars['String']['input']>
}

export type CategoryInsertResponse = {
  readonly __typename?: 'CategoryInsertResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<Category>
}

export type CategoryOrderBy = {
  readonly active?: InputMaybe<OrderByDirection>
  readonly createdAt?: InputMaybe<OrderByDirection>
  readonly description?: InputMaybe<OrderByDirection>
  readonly id?: InputMaybe<OrderByDirection>
  readonly name?: InputMaybe<OrderByDirection>
}

export type CategoryUpdateInput = {
  readonly active?: InputMaybe<Scalars['Boolean']['input']>
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly description?: InputMaybe<Scalars['String']['input']>
  readonly name?: InputMaybe<Scalars['String']['input']>
}

export type CategoryUpdateResponse = {
  readonly __typename?: 'CategoryUpdateResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<Category>
}

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  readonly eq?: InputMaybe<Scalars['Date']['input']>
  readonly gt?: InputMaybe<Scalars['Date']['input']>
  readonly gte?: InputMaybe<Scalars['Date']['input']>
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Date']['input']>>
  readonly is?: InputMaybe<FilterIs>
  readonly lt?: InputMaybe<Scalars['Date']['input']>
  readonly lte?: InputMaybe<Scalars['Date']['input']>
  readonly neq?: InputMaybe<Scalars['Date']['input']>
}

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  readonly eq?: InputMaybe<Scalars['Datetime']['input']>
  readonly gt?: InputMaybe<Scalars['Datetime']['input']>
  readonly gte?: InputMaybe<Scalars['Datetime']['input']>
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Datetime']['input']>>
  readonly is?: InputMaybe<FilterIs>
  readonly lt?: InputMaybe<Scalars['Datetime']['input']>
  readonly lte?: InputMaybe<Scalars['Datetime']['input']>
  readonly neq?: InputMaybe<Scalars['Datetime']['input']>
}

export enum FilterIs {
  NOT_NULL = 'NOT_NULL',
  NULL = 'NULL',
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  readonly eq?: InputMaybe<Scalars['Float']['input']>
  readonly gt?: InputMaybe<Scalars['Float']['input']>
  readonly gte?: InputMaybe<Scalars['Float']['input']>
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Float']['input']>>
  readonly is?: InputMaybe<FilterIs>
  readonly lt?: InputMaybe<Scalars['Float']['input']>
  readonly lte?: InputMaybe<Scalars['Float']['input']>
  readonly neq?: InputMaybe<Scalars['Float']['input']>
}

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  readonly eq?: InputMaybe<Scalars['ID']['input']>
}

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  readonly eq?: InputMaybe<Scalars['Int']['input']>
  readonly gt?: InputMaybe<Scalars['Int']['input']>
  readonly gte?: InputMaybe<Scalars['Int']['input']>
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>
  readonly is?: InputMaybe<FilterIs>
  readonly lt?: InputMaybe<Scalars['Int']['input']>
  readonly lte?: InputMaybe<Scalars['Int']['input']>
  readonly neq?: InputMaybe<Scalars['Int']['input']>
}

export type Market = Node & {
  readonly __typename?: 'Market'
  readonly adress?: Maybe<MarketAdressConnection>
  readonly category?: Maybe<MarketCategoryConnection>
  readonly createdAt: Scalars['Datetime']['output']
  readonly description?: Maybe<Scalars['String']['output']>
  readonly id: Scalars['BigInt']['output']
  readonly marketAdressCollection?: Maybe<MarketAdressConnection>
  readonly marketCategoryCollection?: Maybe<MarketCategoryConnection>
  readonly name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  readonly nodeId: Scalars['ID']['output']
  readonly orderCollection?: Maybe<OrderConnection>
  readonly productCollection?: Maybe<ProductConnection>
  readonly profile: Profile
  readonly profileId: Scalars['UUID']['output']
  readonly updatedAt: Scalars['Datetime']['output']
}

export type MarketAdressArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MarketAdressFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<MarketAdressOrderBy>>
}

export type MarketCategoryArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MarketCategoryFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<MarketCategoryOrderBy>>
}

export type MarketMarketAdressCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MarketAdressFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<MarketAdressOrderBy>>
}

export type MarketMarketCategoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MarketCategoryFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<MarketCategoryOrderBy>>
}

export type MarketOrderCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<OrderFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<OrderOrderBy>>
}

export type MarketProductCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ProductFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ProductOrderBy>>
}

export type MarketAdress = Node & {
  readonly __typename?: 'MarketAdress'
  readonly city?: Maybe<Scalars['String']['output']>
  readonly country?: Maybe<Scalars['String']['output']>
  readonly createdAt: Scalars['Datetime']['output']
  readonly description?: Maybe<Scalars['String']['output']>
  readonly id: Scalars['BigInt']['output']
  readonly line1?: Maybe<Scalars['String']['output']>
  readonly line2?: Maybe<Scalars['String']['output']>
  readonly market: Market
  readonly marketId: Scalars['BigInt']['output']
  readonly name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  readonly nodeId: Scalars['ID']['output']
  readonly placeID?: Maybe<Scalars['String']['output']>
  readonly state?: Maybe<Scalars['String']['output']>
  readonly updatedAt: Scalars['Datetime']['output']
}

export type MarketAdressConnection = {
  readonly __typename?: 'MarketAdressConnection'
  readonly edges: ReadonlyArray<MarketAdressEdge>
  readonly pageInfo: PageInfo
}

export type MarketAdressDeleteResponse = {
  readonly __typename?: 'MarketAdressDeleteResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<MarketAdress>
}

export type MarketAdressEdge = {
  readonly __typename?: 'MarketAdressEdge'
  readonly cursor: Scalars['String']['output']
  readonly node: MarketAdress
}

export type MarketAdressFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  readonly and?: InputMaybe<ReadonlyArray<MarketAdressFilter>>
  readonly city?: InputMaybe<StringFilter>
  readonly country?: InputMaybe<StringFilter>
  readonly createdAt?: InputMaybe<DatetimeFilter>
  readonly description?: InputMaybe<StringFilter>
  readonly id?: InputMaybe<BigIntFilter>
  readonly line1?: InputMaybe<StringFilter>
  readonly line2?: InputMaybe<StringFilter>
  readonly marketId?: InputMaybe<BigIntFilter>
  readonly name?: InputMaybe<StringFilter>
  readonly nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  readonly not?: InputMaybe<MarketAdressFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  readonly or?: InputMaybe<ReadonlyArray<MarketAdressFilter>>
  readonly placeID?: InputMaybe<StringFilter>
  readonly state?: InputMaybe<StringFilter>
  readonly updatedAt?: InputMaybe<DatetimeFilter>
}

export type MarketAdressInsertInput = {
  readonly city?: InputMaybe<Scalars['String']['input']>
  readonly country?: InputMaybe<Scalars['String']['input']>
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly description?: InputMaybe<Scalars['String']['input']>
  readonly line1?: InputMaybe<Scalars['String']['input']>
  readonly line2?: InputMaybe<Scalars['String']['input']>
  readonly marketId?: InputMaybe<Scalars['BigInt']['input']>
  readonly name?: InputMaybe<Scalars['String']['input']>
  readonly placeID?: InputMaybe<Scalars['String']['input']>
  readonly state?: InputMaybe<Scalars['String']['input']>
  readonly updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type MarketAdressInsertResponse = {
  readonly __typename?: 'MarketAdressInsertResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<MarketAdress>
}

export type MarketAdressOrderBy = {
  readonly city?: InputMaybe<OrderByDirection>
  readonly country?: InputMaybe<OrderByDirection>
  readonly createdAt?: InputMaybe<OrderByDirection>
  readonly description?: InputMaybe<OrderByDirection>
  readonly id?: InputMaybe<OrderByDirection>
  readonly line1?: InputMaybe<OrderByDirection>
  readonly line2?: InputMaybe<OrderByDirection>
  readonly marketId?: InputMaybe<OrderByDirection>
  readonly name?: InputMaybe<OrderByDirection>
  readonly placeID?: InputMaybe<OrderByDirection>
  readonly state?: InputMaybe<OrderByDirection>
  readonly updatedAt?: InputMaybe<OrderByDirection>
}

export type MarketAdressUpdateInput = {
  readonly city?: InputMaybe<Scalars['String']['input']>
  readonly country?: InputMaybe<Scalars['String']['input']>
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly description?: InputMaybe<Scalars['String']['input']>
  readonly line1?: InputMaybe<Scalars['String']['input']>
  readonly line2?: InputMaybe<Scalars['String']['input']>
  readonly marketId?: InputMaybe<Scalars['BigInt']['input']>
  readonly name?: InputMaybe<Scalars['String']['input']>
  readonly placeID?: InputMaybe<Scalars['String']['input']>
  readonly state?: InputMaybe<Scalars['String']['input']>
  readonly updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type MarketAdressUpdateResponse = {
  readonly __typename?: 'MarketAdressUpdateResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<MarketAdress>
}

export type MarketCategory = Node & {
  readonly __typename?: 'MarketCategory'
  readonly category: Category
  readonly categoryId: Scalars['BigInt']['output']
  readonly market: Market
  readonly marketId: Scalars['BigInt']['output']
  /** Globally Unique Record Identifier */
  readonly nodeId: Scalars['ID']['output']
}

export type MarketCategoryConnection = {
  readonly __typename?: 'MarketCategoryConnection'
  readonly edges: ReadonlyArray<MarketCategoryEdge>
  readonly pageInfo: PageInfo
}

export type MarketCategoryDeleteResponse = {
  readonly __typename?: 'MarketCategoryDeleteResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<MarketCategory>
}

export type MarketCategoryEdge = {
  readonly __typename?: 'MarketCategoryEdge'
  readonly cursor: Scalars['String']['output']
  readonly node: MarketCategory
}

export type MarketCategoryFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  readonly and?: InputMaybe<ReadonlyArray<MarketCategoryFilter>>
  readonly categoryId?: InputMaybe<BigIntFilter>
  readonly marketId?: InputMaybe<BigIntFilter>
  readonly nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  readonly not?: InputMaybe<MarketCategoryFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  readonly or?: InputMaybe<ReadonlyArray<MarketCategoryFilter>>
}

export type MarketCategoryInsertInput = {
  readonly categoryId?: InputMaybe<Scalars['BigInt']['input']>
  readonly marketId?: InputMaybe<Scalars['BigInt']['input']>
}

export type MarketCategoryInsertResponse = {
  readonly __typename?: 'MarketCategoryInsertResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<MarketCategory>
}

export type MarketCategoryOrderBy = {
  readonly categoryId?: InputMaybe<OrderByDirection>
  readonly marketId?: InputMaybe<OrderByDirection>
}

export type MarketCategoryUpdateInput = {
  readonly categoryId?: InputMaybe<Scalars['BigInt']['input']>
  readonly marketId?: InputMaybe<Scalars['BigInt']['input']>
}

export type MarketCategoryUpdateResponse = {
  readonly __typename?: 'MarketCategoryUpdateResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<MarketCategory>
}

export type MarketConnection = {
  readonly __typename?: 'MarketConnection'
  readonly edges: ReadonlyArray<MarketEdge>
  readonly pageInfo: PageInfo
}

export type MarketDeleteResponse = {
  readonly __typename?: 'MarketDeleteResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<Market>
}

export type MarketEdge = {
  readonly __typename?: 'MarketEdge'
  readonly cursor: Scalars['String']['output']
  readonly node: Market
}

export type MarketFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  readonly and?: InputMaybe<ReadonlyArray<MarketFilter>>
  readonly createdAt?: InputMaybe<DatetimeFilter>
  readonly description?: InputMaybe<StringFilter>
  readonly id?: InputMaybe<BigIntFilter>
  readonly name?: InputMaybe<StringFilter>
  readonly nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  readonly not?: InputMaybe<MarketFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  readonly or?: InputMaybe<ReadonlyArray<MarketFilter>>
  readonly profileId?: InputMaybe<UuidFilter>
  readonly updatedAt?: InputMaybe<DatetimeFilter>
}

export type MarketInsertInput = {
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly description?: InputMaybe<Scalars['String']['input']>
  readonly name?: InputMaybe<Scalars['String']['input']>
  readonly profileId?: InputMaybe<Scalars['UUID']['input']>
  readonly updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type MarketInsertResponse = {
  readonly __typename?: 'MarketInsertResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<Market>
}

export type MarketOrderBy = {
  readonly createdAt?: InputMaybe<OrderByDirection>
  readonly description?: InputMaybe<OrderByDirection>
  readonly id?: InputMaybe<OrderByDirection>
  readonly name?: InputMaybe<OrderByDirection>
  readonly profileId?: InputMaybe<OrderByDirection>
  readonly updatedAt?: InputMaybe<OrderByDirection>
}

export type MarketUpdateInput = {
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly description?: InputMaybe<Scalars['String']['input']>
  readonly name?: InputMaybe<Scalars['String']['input']>
  readonly profileId?: InputMaybe<Scalars['UUID']['input']>
  readonly updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type MarketUpdateResponse = {
  readonly __typename?: 'MarketUpdateResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<Market>
}

/** The root type for creating and mutating data */
export type Mutation = {
  readonly __typename?: 'Mutation'
  /** Deletes zero or more records from the `Category` collection */
  readonly deleteFromCategoryCollection: CategoryDeleteResponse
  /** Deletes zero or more records from the `MarketAdress` collection */
  readonly deleteFromMarketAdressCollection: MarketAdressDeleteResponse
  /** Deletes zero or more records from the `MarketCategory` collection */
  readonly deleteFromMarketCategoryCollection: MarketCategoryDeleteResponse
  /** Deletes zero or more records from the `Market` collection */
  readonly deleteFromMarketCollection: MarketDeleteResponse
  /** Deletes zero or more records from the `Order` collection */
  readonly deleteFromOrderCollection: OrderDeleteResponse
  /** Deletes zero or more records from the `OrderProduct` collection */
  readonly deleteFromOrderProductCollection: OrderProductDeleteResponse
  /** Deletes zero or more records from the `Product` collection */
  readonly deleteFromProductCollection: ProductDeleteResponse
  /** Deletes zero or more records from the `ProductPhoto` collection */
  readonly deleteFromProductPhotoCollection: ProductPhotoDeleteResponse
  /** Deletes zero or more records from the `ProductProductType` collection */
  readonly deleteFromProductProductTypeCollection: ProductProductTypeDeleteResponse
  /** Deletes zero or more records from the `ProductType` collection */
  readonly deleteFromProductTypeCollection: ProductTypeDeleteResponse
  /** Deletes zero or more records from the `Profile` collection */
  readonly deleteFromProfileCollection: ProfileDeleteResponse
  /** Adds one or more `Category` records to the collection */
  readonly insertIntoCategoryCollection?: Maybe<CategoryInsertResponse>
  /** Adds one or more `MarketAdress` records to the collection */
  readonly insertIntoMarketAdressCollection?: Maybe<MarketAdressInsertResponse>
  /** Adds one or more `MarketCategory` records to the collection */
  readonly insertIntoMarketCategoryCollection?: Maybe<MarketCategoryInsertResponse>
  /** Adds one or more `Market` records to the collection */
  readonly insertIntoMarketCollection?: Maybe<MarketInsertResponse>
  /** Adds one or more `Order` records to the collection */
  readonly insertIntoOrderCollection?: Maybe<OrderInsertResponse>
  /** Adds one or more `OrderProduct` records to the collection */
  readonly insertIntoOrderProductCollection?: Maybe<OrderProductInsertResponse>
  /** Adds one or more `Product` records to the collection */
  readonly insertIntoProductCollection?: Maybe<ProductInsertResponse>
  /** Adds one or more `ProductPhoto` records to the collection */
  readonly insertIntoProductPhotoCollection?: Maybe<ProductPhotoInsertResponse>
  /** Adds one or more `ProductProductType` records to the collection */
  readonly insertIntoProductProductTypeCollection?: Maybe<ProductProductTypeInsertResponse>
  /** Adds one or more `ProductType` records to the collection */
  readonly insertIntoProductTypeCollection?: Maybe<ProductTypeInsertResponse>
  /** Adds one or more `Profile` records to the collection */
  readonly insertIntoProfileCollection?: Maybe<ProfileInsertResponse>
  /** Updates zero or more records in the `Category` collection */
  readonly updateCategoryCollection: CategoryUpdateResponse
  /** Updates zero or more records in the `MarketAdress` collection */
  readonly updateMarketAdressCollection: MarketAdressUpdateResponse
  /** Updates zero or more records in the `MarketCategory` collection */
  readonly updateMarketCategoryCollection: MarketCategoryUpdateResponse
  /** Updates zero or more records in the `Market` collection */
  readonly updateMarketCollection: MarketUpdateResponse
  /** Updates zero or more records in the `Order` collection */
  readonly updateOrderCollection: OrderUpdateResponse
  /** Updates zero or more records in the `OrderProduct` collection */
  readonly updateOrderProductCollection: OrderProductUpdateResponse
  /** Updates zero or more records in the `Product` collection */
  readonly updateProductCollection: ProductUpdateResponse
  /** Updates zero or more records in the `ProductPhoto` collection */
  readonly updateProductPhotoCollection: ProductPhotoUpdateResponse
  /** Updates zero or more records in the `ProductProductType` collection */
  readonly updateProductProductTypeCollection: ProductProductTypeUpdateResponse
  /** Updates zero or more records in the `ProductType` collection */
  readonly updateProductTypeCollection: ProductTypeUpdateResponse
  /** Updates zero or more records in the `Profile` collection */
  readonly updateProfileCollection: ProfileUpdateResponse
}

/** The root type for creating and mutating data */
export type MutationDeleteFromCategoryCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<CategoryFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromMarketAdressCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<MarketAdressFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromMarketCategoryCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<MarketCategoryFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromMarketCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<MarketFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromOrderCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<OrderFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromOrderProductCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<OrderProductFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProductCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ProductFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProductPhotoCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ProductPhotoFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProductProductTypeCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ProductProductTypeFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProductTypeCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ProductTypeFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProfileCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ProfileFilter>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoCategoryCollectionArgs = {
  objects: ReadonlyArray<CategoryInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoMarketAdressCollectionArgs = {
  objects: ReadonlyArray<MarketAdressInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoMarketCategoryCollectionArgs = {
  objects: ReadonlyArray<MarketCategoryInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoMarketCollectionArgs = {
  objects: ReadonlyArray<MarketInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoOrderCollectionArgs = {
  objects: ReadonlyArray<OrderInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoOrderProductCollectionArgs = {
  objects: ReadonlyArray<OrderProductInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProductCollectionArgs = {
  objects: ReadonlyArray<ProductInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProductPhotoCollectionArgs = {
  objects: ReadonlyArray<ProductPhotoInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProductProductTypeCollectionArgs = {
  objects: ReadonlyArray<ProductProductTypeInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProductTypeCollectionArgs = {
  objects: ReadonlyArray<ProductTypeInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProfileCollectionArgs = {
  objects: ReadonlyArray<ProfileInsertInput>
}

/** The root type for creating and mutating data */
export type MutationUpdateCategoryCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<CategoryFilter>
  set: CategoryUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateMarketAdressCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<MarketAdressFilter>
  set: MarketAdressUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateMarketCategoryCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<MarketCategoryFilter>
  set: MarketCategoryUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateMarketCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<MarketFilter>
  set: MarketUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateOrderCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<OrderFilter>
  set: OrderUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateOrderProductCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<OrderProductFilter>
  set: OrderProductUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProductCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ProductFilter>
  set: ProductUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProductPhotoCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ProductPhotoFilter>
  set: ProductPhotoUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProductProductTypeCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ProductProductTypeFilter>
  set: ProductProductTypeUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProductTypeCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ProductTypeFilter>
  set: ProductTypeUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProfileCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ProfileFilter>
  set: ProfileUpdateInput
}

export type Node = {
  /** Retrieves a record by `ID` */
  readonly nodeId: Scalars['ID']['output']
}

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  readonly eq?: InputMaybe<Scalars['Opaque']['input']>
  readonly is?: InputMaybe<FilterIs>
}

export type Order = Node & {
  readonly __typename?: 'Order'
  readonly buyer: Profile
  readonly buyerId: Scalars['UUID']['output']
  readonly createdAt: Scalars['Datetime']['output']
  readonly id: Scalars['BigInt']['output']
  /** Globally Unique Record Identifier */
  readonly nodeId: Scalars['ID']['output']
  readonly orderProductCollection?: Maybe<OrderProductConnection>
  readonly products?: Maybe<OrderProductConnection>
  readonly seller: Market
  readonly sellerId: Scalars['BigInt']['output']
  readonly total: Scalars['Float']['output']
}

export type OrderOrderProductCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<OrderProductFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<OrderProductOrderBy>>
}

export type OrderProductsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<OrderProductFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<OrderProductOrderBy>>
}

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  ASCNULLSFIRST = 'AscNullsFirst',
  /** Ascending order, nulls last */
  ASCNULLSLAST = 'AscNullsLast',
  /** Descending order, nulls first */
  DESCNULLSFIRST = 'DescNullsFirst',
  /** Descending order, nulls last */
  DESCNULLSLAST = 'DescNullsLast',
}

export type OrderConnection = {
  readonly __typename?: 'OrderConnection'
  readonly edges: ReadonlyArray<OrderEdge>
  readonly pageInfo: PageInfo
}

export type OrderDeleteResponse = {
  readonly __typename?: 'OrderDeleteResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<Order>
}

export type OrderEdge = {
  readonly __typename?: 'OrderEdge'
  readonly cursor: Scalars['String']['output']
  readonly node: Order
}

export type OrderFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  readonly and?: InputMaybe<ReadonlyArray<OrderFilter>>
  readonly buyerId?: InputMaybe<UuidFilter>
  readonly createdAt?: InputMaybe<DatetimeFilter>
  readonly id?: InputMaybe<BigIntFilter>
  readonly nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  readonly not?: InputMaybe<OrderFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  readonly or?: InputMaybe<ReadonlyArray<OrderFilter>>
  readonly sellerId?: InputMaybe<BigIntFilter>
  readonly total?: InputMaybe<FloatFilter>
}

export type OrderInsertInput = {
  readonly buyerId?: InputMaybe<Scalars['UUID']['input']>
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly sellerId?: InputMaybe<Scalars['BigInt']['input']>
  readonly total?: InputMaybe<Scalars['Float']['input']>
}

export type OrderInsertResponse = {
  readonly __typename?: 'OrderInsertResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<Order>
}

export type OrderOrderBy = {
  readonly buyerId?: InputMaybe<OrderByDirection>
  readonly createdAt?: InputMaybe<OrderByDirection>
  readonly id?: InputMaybe<OrderByDirection>
  readonly sellerId?: InputMaybe<OrderByDirection>
  readonly total?: InputMaybe<OrderByDirection>
}

export type OrderProduct = Node & {
  readonly __typename?: 'OrderProduct'
  readonly Order: Order
  /** Globally Unique Record Identifier */
  readonly nodeId: Scalars['ID']['output']
  readonly order: Order
  readonly orderId: Scalars['BigInt']['output']
  readonly product: Product
  readonly productId: Scalars['BigInt']['output']
}

export type OrderProductConnection = {
  readonly __typename?: 'OrderProductConnection'
  readonly edges: ReadonlyArray<OrderProductEdge>
  readonly pageInfo: PageInfo
}

export type OrderProductDeleteResponse = {
  readonly __typename?: 'OrderProductDeleteResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<OrderProduct>
}

export type OrderProductEdge = {
  readonly __typename?: 'OrderProductEdge'
  readonly cursor: Scalars['String']['output']
  readonly node: OrderProduct
}

export type OrderProductFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  readonly and?: InputMaybe<ReadonlyArray<OrderProductFilter>>
  readonly nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  readonly not?: InputMaybe<OrderProductFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  readonly or?: InputMaybe<ReadonlyArray<OrderProductFilter>>
  readonly orderId?: InputMaybe<BigIntFilter>
  readonly productId?: InputMaybe<BigIntFilter>
}

export type OrderProductInsertInput = {
  readonly orderId?: InputMaybe<Scalars['BigInt']['input']>
  readonly productId?: InputMaybe<Scalars['BigInt']['input']>
}

export type OrderProductInsertResponse = {
  readonly __typename?: 'OrderProductInsertResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<OrderProduct>
}

export type OrderProductOrderBy = {
  readonly orderId?: InputMaybe<OrderByDirection>
  readonly productId?: InputMaybe<OrderByDirection>
}

export type OrderProductUpdateInput = {
  readonly orderId?: InputMaybe<Scalars['BigInt']['input']>
  readonly productId?: InputMaybe<Scalars['BigInt']['input']>
}

export type OrderProductUpdateResponse = {
  readonly __typename?: 'OrderProductUpdateResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<OrderProduct>
}

export type OrderUpdateInput = {
  readonly buyerId?: InputMaybe<Scalars['UUID']['input']>
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly sellerId?: InputMaybe<Scalars['BigInt']['input']>
  readonly total?: InputMaybe<Scalars['Float']['input']>
}

export type OrderUpdateResponse = {
  readonly __typename?: 'OrderUpdateResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<Order>
}

export type PageInfo = {
  readonly __typename?: 'PageInfo'
  readonly endCursor?: Maybe<Scalars['String']['output']>
  readonly hasNextPage: Scalars['Boolean']['output']
  readonly hasPreviousPage: Scalars['Boolean']['output']
  readonly startCursor?: Maybe<Scalars['String']['output']>
}

export type Product = Node & {
  readonly __typename?: 'Product'
  readonly createdAt: Scalars['Datetime']['output']
  readonly description?: Maybe<Scalars['String']['output']>
  readonly id: Scalars['BigInt']['output']
  readonly market: Market
  readonly marketId: Scalars['BigInt']['output']
  readonly name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  readonly nodeId: Scalars['ID']['output']
  readonly orderProductCollection?: Maybe<OrderProductConnection>
  readonly photos?: Maybe<ProductPhotoConnection>
  readonly productPhotoCollection?: Maybe<ProductPhotoConnection>
  readonly productProductTypeCollection?: Maybe<ProductProductTypeConnection>
  readonly type?: Maybe<ProductProductTypeConnection>
  readonly unit?: Maybe<Product_Unit_Type>
  readonly updatedAt: Scalars['Datetime']['output']
}

export type ProductOrderProductCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<OrderProductFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<OrderProductOrderBy>>
}

export type ProductPhotosArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ProductPhotoFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ProductPhotoOrderBy>>
}

export type ProductProductPhotoCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ProductPhotoFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ProductPhotoOrderBy>>
}

export type ProductProductProductTypeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ProductProductTypeFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ProductProductTypeOrderBy>>
}

export type ProductTypeArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ProductProductTypeFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ProductProductTypeOrderBy>>
}

export type ProductConnection = {
  readonly __typename?: 'ProductConnection'
  readonly edges: ReadonlyArray<ProductEdge>
  readonly pageInfo: PageInfo
}

export type ProductDeleteResponse = {
  readonly __typename?: 'ProductDeleteResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<Product>
}

export type ProductEdge = {
  readonly __typename?: 'ProductEdge'
  readonly cursor: Scalars['String']['output']
  readonly node: Product
}

export type ProductFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  readonly and?: InputMaybe<ReadonlyArray<ProductFilter>>
  readonly createdAt?: InputMaybe<DatetimeFilter>
  readonly description?: InputMaybe<StringFilter>
  readonly id?: InputMaybe<BigIntFilter>
  readonly marketId?: InputMaybe<BigIntFilter>
  readonly name?: InputMaybe<StringFilter>
  readonly nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  readonly not?: InputMaybe<ProductFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  readonly or?: InputMaybe<ReadonlyArray<ProductFilter>>
  readonly unit?: InputMaybe<Product_Unit_TypeFilter>
  readonly updatedAt?: InputMaybe<DatetimeFilter>
}

export type ProductInsertInput = {
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly description?: InputMaybe<Scalars['String']['input']>
  readonly marketId?: InputMaybe<Scalars['BigInt']['input']>
  readonly name?: InputMaybe<Scalars['String']['input']>
  readonly unit?: InputMaybe<Product_Unit_Type>
  readonly updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type ProductInsertResponse = {
  readonly __typename?: 'ProductInsertResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<Product>
}

export type ProductOrderBy = {
  readonly createdAt?: InputMaybe<OrderByDirection>
  readonly description?: InputMaybe<OrderByDirection>
  readonly id?: InputMaybe<OrderByDirection>
  readonly marketId?: InputMaybe<OrderByDirection>
  readonly name?: InputMaybe<OrderByDirection>
  readonly unit?: InputMaybe<OrderByDirection>
  readonly updatedAt?: InputMaybe<OrderByDirection>
}

export type ProductPhoto = Node & {
  readonly __typename?: 'ProductPhoto'
  readonly createdAt: Scalars['Datetime']['output']
  readonly id: Scalars['UUID']['output']
  /** Globally Unique Record Identifier */
  readonly nodeId: Scalars['ID']['output']
  readonly product: Product
  readonly productId: Scalars['BigInt']['output']
  readonly updatedAt: Scalars['Datetime']['output']
  readonly url: Scalars['String']['output']
}

export type ProductPhotoConnection = {
  readonly __typename?: 'ProductPhotoConnection'
  readonly edges: ReadonlyArray<ProductPhotoEdge>
  readonly pageInfo: PageInfo
}

export type ProductPhotoDeleteResponse = {
  readonly __typename?: 'ProductPhotoDeleteResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<ProductPhoto>
}

export type ProductPhotoEdge = {
  readonly __typename?: 'ProductPhotoEdge'
  readonly cursor: Scalars['String']['output']
  readonly node: ProductPhoto
}

export type ProductPhotoFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  readonly and?: InputMaybe<ReadonlyArray<ProductPhotoFilter>>
  readonly createdAt?: InputMaybe<DatetimeFilter>
  readonly id?: InputMaybe<UuidFilter>
  readonly nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  readonly not?: InputMaybe<ProductPhotoFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  readonly or?: InputMaybe<ReadonlyArray<ProductPhotoFilter>>
  readonly productId?: InputMaybe<BigIntFilter>
  readonly updatedAt?: InputMaybe<DatetimeFilter>
  readonly url?: InputMaybe<StringFilter>
}

export type ProductPhotoInsertInput = {
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly id?: InputMaybe<Scalars['UUID']['input']>
  readonly productId?: InputMaybe<Scalars['BigInt']['input']>
  readonly updatedAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly url?: InputMaybe<Scalars['String']['input']>
}

export type ProductPhotoInsertResponse = {
  readonly __typename?: 'ProductPhotoInsertResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<ProductPhoto>
}

export type ProductPhotoOrderBy = {
  readonly createdAt?: InputMaybe<OrderByDirection>
  readonly id?: InputMaybe<OrderByDirection>
  readonly productId?: InputMaybe<OrderByDirection>
  readonly updatedAt?: InputMaybe<OrderByDirection>
  readonly url?: InputMaybe<OrderByDirection>
}

export type ProductPhotoUpdateInput = {
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly id?: InputMaybe<Scalars['UUID']['input']>
  readonly productId?: InputMaybe<Scalars['BigInt']['input']>
  readonly updatedAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly url?: InputMaybe<Scalars['String']['input']>
}

export type ProductPhotoUpdateResponse = {
  readonly __typename?: 'ProductPhotoUpdateResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<ProductPhoto>
}

export type ProductProductType = Node & {
  readonly __typename?: 'ProductProductType'
  /** Globally Unique Record Identifier */
  readonly nodeId: Scalars['ID']['output']
  readonly product: Product
  readonly productId: Scalars['BigInt']['output']
  readonly productType: ProductType
  readonly productTypeId: Scalars['BigInt']['output']
}

export type ProductProductTypeConnection = {
  readonly __typename?: 'ProductProductTypeConnection'
  readonly edges: ReadonlyArray<ProductProductTypeEdge>
  readonly pageInfo: PageInfo
}

export type ProductProductTypeDeleteResponse = {
  readonly __typename?: 'ProductProductTypeDeleteResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<ProductProductType>
}

export type ProductProductTypeEdge = {
  readonly __typename?: 'ProductProductTypeEdge'
  readonly cursor: Scalars['String']['output']
  readonly node: ProductProductType
}

export type ProductProductTypeFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  readonly and?: InputMaybe<ReadonlyArray<ProductProductTypeFilter>>
  readonly nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  readonly not?: InputMaybe<ProductProductTypeFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  readonly or?: InputMaybe<ReadonlyArray<ProductProductTypeFilter>>
  readonly productId?: InputMaybe<BigIntFilter>
  readonly productTypeId?: InputMaybe<BigIntFilter>
}

export type ProductProductTypeInsertInput = {
  readonly productId?: InputMaybe<Scalars['BigInt']['input']>
  readonly productTypeId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProductProductTypeInsertResponse = {
  readonly __typename?: 'ProductProductTypeInsertResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<ProductProductType>
}

export type ProductProductTypeOrderBy = {
  readonly productId?: InputMaybe<OrderByDirection>
  readonly productTypeId?: InputMaybe<OrderByDirection>
}

export type ProductProductTypeUpdateInput = {
  readonly productId?: InputMaybe<Scalars['BigInt']['input']>
  readonly productTypeId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProductProductTypeUpdateResponse = {
  readonly __typename?: 'ProductProductTypeUpdateResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<ProductProductType>
}

export type ProductType = Node & {
  readonly __typename?: 'ProductType'
  readonly createdAt: Scalars['Datetime']['output']
  readonly description?: Maybe<Scalars['String']['output']>
  readonly id: Scalars['BigInt']['output']
  readonly name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  readonly nodeId: Scalars['ID']['output']
  readonly productProductTypeCollection?: Maybe<ProductProductTypeConnection>
  readonly visible: Scalars['Boolean']['output']
}

export type ProductTypeProductProductTypeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ProductProductTypeFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ProductProductTypeOrderBy>>
}

export type ProductTypeConnection = {
  readonly __typename?: 'ProductTypeConnection'
  readonly edges: ReadonlyArray<ProductTypeEdge>
  readonly pageInfo: PageInfo
}

export type ProductTypeDeleteResponse = {
  readonly __typename?: 'ProductTypeDeleteResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<ProductType>
}

export type ProductTypeEdge = {
  readonly __typename?: 'ProductTypeEdge'
  readonly cursor: Scalars['String']['output']
  readonly node: ProductType
}

export type ProductTypeFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  readonly and?: InputMaybe<ReadonlyArray<ProductTypeFilter>>
  readonly createdAt?: InputMaybe<DatetimeFilter>
  readonly description?: InputMaybe<StringFilter>
  readonly id?: InputMaybe<BigIntFilter>
  readonly name?: InputMaybe<StringFilter>
  readonly nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  readonly not?: InputMaybe<ProductTypeFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  readonly or?: InputMaybe<ReadonlyArray<ProductTypeFilter>>
  readonly visible?: InputMaybe<BooleanFilter>
}

export type ProductTypeInsertInput = {
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly description?: InputMaybe<Scalars['String']['input']>
  readonly name?: InputMaybe<Scalars['String']['input']>
  readonly visible?: InputMaybe<Scalars['Boolean']['input']>
}

export type ProductTypeInsertResponse = {
  readonly __typename?: 'ProductTypeInsertResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<ProductType>
}

export type ProductTypeOrderBy = {
  readonly createdAt?: InputMaybe<OrderByDirection>
  readonly description?: InputMaybe<OrderByDirection>
  readonly id?: InputMaybe<OrderByDirection>
  readonly name?: InputMaybe<OrderByDirection>
  readonly visible?: InputMaybe<OrderByDirection>
}

export type ProductTypeUpdateInput = {
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly description?: InputMaybe<Scalars['String']['input']>
  readonly name?: InputMaybe<Scalars['String']['input']>
  readonly visible?: InputMaybe<Scalars['Boolean']['input']>
}

export type ProductTypeUpdateResponse = {
  readonly __typename?: 'ProductTypeUpdateResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<ProductType>
}

export type ProductUpdateInput = {
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly description?: InputMaybe<Scalars['String']['input']>
  readonly marketId?: InputMaybe<Scalars['BigInt']['input']>
  readonly name?: InputMaybe<Scalars['String']['input']>
  readonly unit?: InputMaybe<Product_Unit_Type>
  readonly updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type ProductUpdateResponse = {
  readonly __typename?: 'ProductUpdateResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<Product>
}

export type Profile = Node & {
  readonly __typename?: 'Profile'
  readonly createdAt: Scalars['Datetime']['output']
  readonly email?: Maybe<Scalars['String']['output']>
  readonly firstName: Scalars['String']['output']
  readonly id: Scalars['UUID']['output']
  readonly isMarket: Scalars['Boolean']['output']
  readonly lastName: Scalars['String']['output']
  readonly marketCollection?: Maybe<MarketConnection>
  readonly marketId?: Maybe<Scalars['BigInt']['output']>
  /** Globally Unique Record Identifier */
  readonly nodeId: Scalars['ID']['output']
  readonly orderCollection?: Maybe<OrderConnection>
  readonly phone?: Maybe<Scalars['String']['output']>
  readonly updatedAt: Scalars['Datetime']['output']
}

export type ProfileMarketCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MarketFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<MarketOrderBy>>
}

export type ProfileOrderCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<OrderFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<OrderOrderBy>>
}

export type ProfileConnection = {
  readonly __typename?: 'ProfileConnection'
  readonly edges: ReadonlyArray<ProfileEdge>
  readonly pageInfo: PageInfo
}

export type ProfileDeleteResponse = {
  readonly __typename?: 'ProfileDeleteResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<Profile>
}

export type ProfileEdge = {
  readonly __typename?: 'ProfileEdge'
  readonly cursor: Scalars['String']['output']
  readonly node: Profile
}

export type ProfileFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  readonly and?: InputMaybe<ReadonlyArray<ProfileFilter>>
  readonly createdAt?: InputMaybe<DatetimeFilter>
  readonly email?: InputMaybe<StringFilter>
  readonly firstName?: InputMaybe<StringFilter>
  readonly id?: InputMaybe<UuidFilter>
  readonly isMarket?: InputMaybe<BooleanFilter>
  readonly lastName?: InputMaybe<StringFilter>
  readonly marketId?: InputMaybe<BigIntFilter>
  readonly nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  readonly not?: InputMaybe<ProfileFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  readonly or?: InputMaybe<ReadonlyArray<ProfileFilter>>
  readonly phone?: InputMaybe<StringFilter>
  readonly updatedAt?: InputMaybe<DatetimeFilter>
}

export type ProfileInsertInput = {
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly email?: InputMaybe<Scalars['String']['input']>
  readonly firstName?: InputMaybe<Scalars['String']['input']>
  readonly id?: InputMaybe<Scalars['UUID']['input']>
  readonly isMarket?: InputMaybe<Scalars['Boolean']['input']>
  readonly lastName?: InputMaybe<Scalars['String']['input']>
  readonly marketId?: InputMaybe<Scalars['BigInt']['input']>
  readonly phone?: InputMaybe<Scalars['String']['input']>
  readonly updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type ProfileInsertResponse = {
  readonly __typename?: 'ProfileInsertResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<Profile>
}

export type ProfileOrderBy = {
  readonly createdAt?: InputMaybe<OrderByDirection>
  readonly email?: InputMaybe<OrderByDirection>
  readonly firstName?: InputMaybe<OrderByDirection>
  readonly id?: InputMaybe<OrderByDirection>
  readonly isMarket?: InputMaybe<OrderByDirection>
  readonly lastName?: InputMaybe<OrderByDirection>
  readonly marketId?: InputMaybe<OrderByDirection>
  readonly phone?: InputMaybe<OrderByDirection>
  readonly updatedAt?: InputMaybe<OrderByDirection>
}

export type ProfileUpdateInput = {
  readonly createdAt?: InputMaybe<Scalars['Datetime']['input']>
  readonly email?: InputMaybe<Scalars['String']['input']>
  readonly firstName?: InputMaybe<Scalars['String']['input']>
  readonly id?: InputMaybe<Scalars['UUID']['input']>
  readonly isMarket?: InputMaybe<Scalars['Boolean']['input']>
  readonly lastName?: InputMaybe<Scalars['String']['input']>
  readonly marketId?: InputMaybe<Scalars['BigInt']['input']>
  readonly phone?: InputMaybe<Scalars['String']['input']>
  readonly updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type ProfileUpdateResponse = {
  readonly __typename?: 'ProfileUpdateResponse'
  /** Count of the records impacted by the mutation */
  readonly affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  readonly records: ReadonlyArray<Profile>
}

/** The root type for querying data */
export type Query = {
  readonly __typename?: 'Query'
  /** A pagable collection of type `Category` */
  readonly categoryCollection?: Maybe<CategoryConnection>
  /** A pagable collection of type `MarketAdress` */
  readonly marketAdressCollection?: Maybe<MarketAdressConnection>
  /** A pagable collection of type `MarketCategory` */
  readonly marketCategoryCollection?: Maybe<MarketCategoryConnection>
  /** A pagable collection of type `Market` */
  readonly marketCollection?: Maybe<MarketConnection>
  /** Retrieve a record by its `ID` */
  readonly node?: Maybe<Node>
  /** A pagable collection of type `Order` */
  readonly orderCollection?: Maybe<OrderConnection>
  /** A pagable collection of type `OrderProduct` */
  readonly orderProductCollection?: Maybe<OrderProductConnection>
  /** A pagable collection of type `Product` */
  readonly productCollection?: Maybe<ProductConnection>
  /** A pagable collection of type `ProductPhoto` */
  readonly productPhotoCollection?: Maybe<ProductPhotoConnection>
  /** A pagable collection of type `ProductProductType` */
  readonly productProductTypeCollection?: Maybe<ProductProductTypeConnection>
  /** A pagable collection of type `ProductType` */
  readonly productTypeCollection?: Maybe<ProductTypeConnection>
  /** A pagable collection of type `Profile` */
  readonly profileCollection?: Maybe<ProfileConnection>
}

/** The root type for querying data */
export type QueryCategoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<CategoryFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<CategoryOrderBy>>
}

/** The root type for querying data */
export type QueryMarketAdressCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MarketAdressFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<MarketAdressOrderBy>>
}

/** The root type for querying data */
export type QueryMarketCategoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MarketCategoryFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<MarketCategoryOrderBy>>
}

/** The root type for querying data */
export type QueryMarketCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<MarketFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<MarketOrderBy>>
}

/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root type for querying data */
export type QueryOrderCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<OrderFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<OrderOrderBy>>
}

/** The root type for querying data */
export type QueryOrderProductCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<OrderProductFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<OrderProductOrderBy>>
}

/** The root type for querying data */
export type QueryProductCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ProductFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ProductOrderBy>>
}

/** The root type for querying data */
export type QueryProductPhotoCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ProductPhotoFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ProductPhotoOrderBy>>
}

/** The root type for querying data */
export type QueryProductProductTypeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ProductProductTypeFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ProductProductTypeOrderBy>>
}

/** The root type for querying data */
export type QueryProductTypeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ProductTypeFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ProductTypeOrderBy>>
}

/** The root type for querying data */
export type QueryProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ProfileFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ReadonlyArray<ProfileOrderBy>>
}

export type Session = {
  readonly token?: Maybe<Scalars['String']['output']>
}

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  readonly eq?: InputMaybe<Scalars['String']['input']>
  readonly gt?: InputMaybe<Scalars['String']['input']>
  readonly gte?: InputMaybe<Scalars['String']['input']>
  readonly ilike?: InputMaybe<Scalars['String']['input']>
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>
  readonly iregex?: InputMaybe<Scalars['String']['input']>
  readonly is?: InputMaybe<FilterIs>
  readonly like?: InputMaybe<Scalars['String']['input']>
  readonly lt?: InputMaybe<Scalars['String']['input']>
  readonly lte?: InputMaybe<Scalars['String']['input']>
  readonly neq?: InputMaybe<Scalars['String']['input']>
  readonly regex?: InputMaybe<Scalars['String']['input']>
  readonly startsWith?: InputMaybe<Scalars['String']['input']>
}

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  readonly eq?: InputMaybe<Scalars['Time']['input']>
  readonly gt?: InputMaybe<Scalars['Time']['input']>
  readonly gte?: InputMaybe<Scalars['Time']['input']>
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Time']['input']>>
  readonly is?: InputMaybe<FilterIs>
  readonly lt?: InputMaybe<Scalars['Time']['input']>
  readonly lte?: InputMaybe<Scalars['Time']['input']>
  readonly neq?: InputMaybe<Scalars['Time']['input']>
}

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  readonly eq?: InputMaybe<Scalars['UUID']['input']>
  readonly in?: InputMaybe<ReadonlyArray<Scalars['UUID']['input']>>
  readonly is?: InputMaybe<FilterIs>
  readonly neq?: InputMaybe<Scalars['UUID']['input']>
}

export enum Product_Unit_Type {
  G = 'g',
  KG = 'kg',
  LT = 'lt',
  ML = 'ml',
  UNIT = 'unit',
}

/** Boolean expression comparing fields on type "product_unit_type" */
export type Product_Unit_TypeFilter = {
  readonly eq?: InputMaybe<Product_Unit_Type>
  readonly in?: InputMaybe<ReadonlyArray<Product_Unit_Type>>
  readonly is?: InputMaybe<FilterIs>
  readonly neq?: InputMaybe<Product_Unit_Type>
}
