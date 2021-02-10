import React from 'react'
import styled from 'styled-components'

import MagicLink from 'src/components/base/MagicLink'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const Item = styled(MagicLink)`
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`
export default function MainLinks() {
  return (
    <Wrapper>
      <Item to='https://www.legifrance.gouv.fr/'>legifrance.gouv.fr</Item>
      <Item to='https://www.gouvernement.fr/'>gouvernement.fr</Item>
      <Item to='https://www.service-public.fr/'>service-public.fr</Item>
      <Item to='https://www.data.gouv.fr/'>data.gouv.fr</Item>
    </Wrapper>
  )
}