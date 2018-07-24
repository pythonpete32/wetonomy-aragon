import React from 'react'
import PropTypes from 'prop-types'
import { Text, Card, theme } from '@aragon/ui'
import MemberProfileShort from '../MemberProfileShort'
import styled from 'styled-components'

import ActionButtonsContainer from '../ActionButtonsContainer'
import ActionButton from '../ActionButton'

class RemoveMemberForm extends React.Component {
  static propTypes = {
    onRemoveMember: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    member: PropTypes.object.isRequired
  }

  handleRemoveClick = () => {    
    this.props.onRemoveMember(this.props.member)
    this.props.onClose()
  }

  render() {
    const { address, name } = this.props.member
    return (
      <section>
        <Text color={theme.textDimmed} size="large">Do you really want to remove this member from the organisation?</Text>
        <MemberCard>
          <MemberProfileShort address={address} name={name} />
          <AddressContainer>
            <Text color={theme.textSecondary}>{address}</Text>
          </AddressContainer>
        </MemberCard>

        <ActionButtonsContainer>
          <ActionButton 
            mode="secondary" 
            onClick={this.props.onClose}>
            No
          </ActionButton>
          <ActionButton 
            mode="strong" 
            onClick={this.handleRemoveClick}>
            Yes
          </ActionButton>
        </ActionButtonsContainer>
      </section>
    )
  }
}

const AddressContainer = styled.section`  
  background-color: white;
  margin-top: 15px;
`

const MemberCard = styled(Card)`
  height: auto;
  width: 100%;
  padding: 20px;  
  background-color: white !important;
  margin: 15px 0px;
`

export default RemoveMemberForm