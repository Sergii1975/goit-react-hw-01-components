import styled from '@emotion/styled'

// export const FriendList = styled.li`
//   display: flex;
//   margin-bottom: 30px;
//   align-items: center;
//   justify-content: center;
// `

export const FriendList = styled.li`
  display: flex;
  width: 300px;
  background-color: #f4f0ec;
  align-items: center;
  margin: 0px auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  :not(:last-child) {
    margin-bottom: 10px;
  }
`

export const FriendAvatar = styled.img`
width: 75px
`
export const FriendName = styled.p`
  font-size: 18px;
  line-height: 1.62;
  font-weight: 18px;
  margin-left: 20px;
`
export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
background-color: ${props => (props.statusType ? 'green' : 'red')};
`
export const FriendItems = styled.ul`
  display: flex;
  width: 350px;
  flex-direction: column;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #c7c9c9;
  border-radius: 10px;
  box-shadow: 1rem 1rem 2rem rgb(65, 64, 64), -1rem -1rem 2rem rgb(82, 81, 81);
`