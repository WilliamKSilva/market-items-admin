import styled from 'styled-components'
import Loading from 'react-loading'

export const ReactLoading = styled(Loading).attrs({
  type: 'spin',
  color: '#0001FC',  
})`
  position: absolute; 
  height: 16px;
  top: 50%;
  left: 50%; /* push down by 50% of the height of the container */
  margin-top: -8px; /* bring it back up by half of it's height */
  width: 200px;
`;