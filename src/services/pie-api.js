// import { createHttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient, gql } from 'apollo-boost'
// import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'

let API = null
/**
 * Queries
 */
const CONTENT_ITEM = gql`
  query ContentItem($versionedID: VersionedID!) {
    contentItem(versionedID: $versionedID) {
      id
    }
  }
`
/**
 * PIE GraphQL API
 */
const PieApi = ({ client }) => ({
  async contentItem(versionedID) {
    return client.query({
      query: CONTENT_ITEM,
      variables: { versionedID },
    })
  },
})

/**
 * Make Single API client
 */
const makePieApi = ({ token }) => {
  const httpLink = new HttpLink({ uri: process.env.REACT_APP_PIE_API_URL })

  const authMiddleware = (token) => {
    return new ApolloLink((operation, forward) => {
      if (token) {
        operation.setContext({
          headers: {
            Authorization: `Bearer ${token}`,
          },
          fetchOptions: {
            mode: 'cors',
          },
        })
      }

      return forward(operation)
    })
  }

  const cache = new InMemoryCache({})

  const client = new ApolloClient({
    link: authMiddleware(token).concat(httpLink),
    cache,
  })

  if (!API) {
    API = PieApi({ client })
  }
  return API
}

export { API, makePieApi }
