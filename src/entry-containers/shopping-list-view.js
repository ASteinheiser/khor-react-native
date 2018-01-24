import React                      from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Icon, Toolbar }          from 'react-native-material-ui'
import styled                     from 'styled-components/native'
import _                          from 'lodash'

import Button   from '../components/button.js'
import ListItem from '../components/list-item.js'

class ShoppingListView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shoppingList: [],
      showModal: false
    }
  }

  addNewItem = () => {
    // this.setState({ showModal: true })
    this.setState({ shoppingList: [...this.state.shoppingList, { id: this.state.shoppingList.length++, name: 'Strawberries', active: true }] })
  }

  render() {
    return (
      <Flex>
        <Toolbar
          centerElement='Shopping List'
          leftElement='menu'
          onLeftElementPress={()=>{this.props.navigation.navigate('DrawerToggle')}}
        />
        <Container>
          <Margin>
            <Button
              primary
              icon="add-to-photos"
              text="Add New Item"
              onPress={this.addNewItem} />
          </Margin>
          {
            this.state.shoppingList[0] ?
            <View>
              {
                Object.keys(this.state.shoppingList).map((item) => {
                  return (
                    <ListItem
                      key={this.state.shoppingList[item].id}
                      leftElement={this.state.shoppingList[item].active ? <Icon name="check-box-outline-blank" /> : <Icon color='#455a64' name="check-box" />}
                      onLeftElementPress={() => {
                        const newState = _.cloneDeep(this.state)
                        newState.shoppingList[item].active = !newState.shoppingList[item].active
                        this.setState(newState)
                      }}
                      centerElement={{primaryText:this.state.shoppingList[item].name}}
                      onPress={() => console.log('show details...')} />
                  )
                })
              }
            </View>
            :
            <View>
              <ListItem centerElement={{primaryText:'Your Shopping List is empty...'}} />
            </View>
          }
        </Container>
      </Flex>
    )
  }
}
export default ShoppingListView

const Flex = styled.View`
  flex: 1;
`

const Container = styled.ScrollView`
  background-color: #303030;
  flex: 1;
`

const Margin = styled.View`
  margin: 25px 20px;
`
