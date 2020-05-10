import { AppRegistry } from 'react-native'

import { App } from 'components/src/App'

AppRegistry.registerComponent('AwesomeTSProject', () => App)
AppRegistry.runApplication('AwesomeTSProject', {
    rootTag: document.getElementById('root'),
})
