import styled from '@emotion/styled'

export const StatSection = styled.section`
  width: 300px;
  margin: 0 auto 50px;
  padding: 50px 20px;
  border-radius: 10px;
  box-shadow: 1rem 1rem 2rem rgb(65, 64, 64), -1rem -1rem 2rem rgb(82, 81, 81);
`
export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: #192431;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: white;
`
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
`
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 0;
  text-align: center;  
  color: #f3f3f3;
  width: 50px;
  padding: 5px;
`
export const StatLabel = styled.span`
font-size: 16px;
padding-top: 5px;
`
export const StatPercentage = styled.span`
font-size: 20px;
padding-bottom: 5px;
`