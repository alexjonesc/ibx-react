import { ApolloClient, gql } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'

let API = null

/**
 * Queries
 */
export const CONTENT_ITEM = gql`
  query ContentItem($versionedID: VersionedID!) {
    contentItem(versionedID: $versionedID) {
      id
      config
      version {
        major
        minor
        patch
        prerelease
      }
    }
  }
`

export const TEST = gql`
  query {
    _1: contentItem(versionedID: "538a0f71-e116-468c-a9f1-4668d9e4e996@0.0.3") {
      id
      config
      version {
        major
        minor
        patch
        prerelease
      }
    }

    _2: contentItem(versionedID: "b412b24d-e3d4-4112-99a2-09dc75f32b34@0.0.9") {
      id
      config
      version {
        major
        minor
        patch
        prerelease
      }
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
      etchPolicy: 'cache-and-network',
    })
  },

  async test() {
    return client.query({
      query: TEST,
    })
  },

  getClient() {
    return client
  },
})

/**
 * Make Single API client
 */
const makePieApi = ({ token }) => {
  const httpLink = new HttpLink({ uri: process.env.REACT_APP_PIE_API_URL })

  // auth/cors
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

  // caching and persistence
  const cache = new InMemoryCache({})
  persistCache({
    cache,
    storage: localStorage,
  })

  // client
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
