import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../../../../../__generated__/global-types'

const defaultOptions = {} as const
export type ActiveCategoriesQueryVariables = Types.Exact<{ [key: string]: never }>

export type ActiveCategoriesQueryResult = {
  readonly __typename: 'Query'
  readonly categoires: {
    readonly __typename: 'CategoryConnection'
    readonly edges: ReadonlyArray<{
      readonly __typename: 'CategoryEdge'
      readonly node: {
        readonly __typename: 'Category'
        readonly id: string
        readonly name: string
        readonly description: string | null
      }
    }>
  } | null
}

export const ActiveCategoriesQueryDocument = gql`
  query ActiveCategoriesQuery {
    __typename
    categoires: categoryCollection(filter: { active: { eq: true } }, first: 10) {
      __typename
      edges {
        __typename
        node {
          __typename
          id
          name
          description
        }
      }
    }
  }
`

/**
 * __useActiveCategoriesQuery__
 *
 * To run a query within a React component, call `useActiveCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<ActiveCategoriesQueryResult, ActiveCategoriesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ActiveCategoriesQueryResult, ActiveCategoriesQueryVariables>(
    ActiveCategoriesQueryDocument,
    options
  )
}
export function useActiveCategoriesQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ActiveCategoriesQueryResult,
    ActiveCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ActiveCategoriesQueryResult, ActiveCategoriesQueryVariables>(
    ActiveCategoriesQueryDocument,
    options
  )
}
export function useActiveCategoriesQuerySuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ActiveCategoriesQueryResult,
    ActiveCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<ActiveCategoriesQueryResult, ActiveCategoriesQueryVariables>(
    ActiveCategoriesQueryDocument,
    options
  )
}
export type ActiveCategoriesQueryHookResult = ReturnType<typeof useActiveCategoriesQuery>
export type ActiveCategoriesQueryLazyQueryHookResult = ReturnType<
  typeof useActiveCategoriesQueryLazyQuery
>
export type ActiveCategoriesQuerySuspenseQueryHookResult = ReturnType<
  typeof useActiveCategoriesQuerySuspenseQuery
>
export type ActiveCategoriesQueryQueryResult = Apollo.QueryResult<
  ActiveCategoriesQueryResult,
  ActiveCategoriesQueryVariables
>
