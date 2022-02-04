export default function ({ store, route }) {
  let skeleton = null

  if (route.name.includes('filters')) skeleton = 'page-filters'
  else if (route.name.includes('properties')) skeleton = 'page-property'
  else if (route.name.includes('')) skeleton = 'page-index'

  store.commit('updateSkeleton', skeleton)
}
