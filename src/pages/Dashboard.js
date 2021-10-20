import React from 'react'
import Background from '../components/Background'
import Button from '../components/Button'
import Card from '../components/Card'
import { logoutUser } from '../api/auth-api'

export default function Dashboard() {
  return (
    <Background>
      
       <Card
                title="Goa ICU Hospital"
                time="3:00 PM - 11:00 - 10/10/2018, Thu"
                city="Mumbai, 408801"
                department="Surgery Department"
       
       />

      <Card
                title="Arya Hospital"
                time="3:00 PM - 11:00 - 10/10/2018, Thu"
                city="Chicago, 401403"
                department="Psychology Department"
       
       />

      <Card
                title="Priya Hospital"
                time="3:00 PM - 11:00 - 10/10/2018, Thu"
                city="Pune, 350801"
                department="Biochemical Department"
       
       />

      <Card
                title="Joshi Hospital"
                time="3:00 PM - 11:00 - 10/10/2018, Thu"
                city="Parbhani, 408801"
                department="Computer Department"
       
       />
     
      <Button mode="outlined" onPress={logoutUser}>
        Logout
      </Button>
    </Background>
  )
}

