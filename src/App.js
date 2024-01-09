import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/MyJumbotron'
import { Container, Row, Col } from 'react-bootstrap'
import BookList from './components/BookList'
import CommentArea from './components/CommentArea'
import fantasy from './data/fantasy.json'
import { useState } from 'react'

//togli component e importa useState per trasformarlo in functional, use effect non lo importo perchè non ci sono cicli di vita del component
//app diventa una funzione, non posso più usare state e setState, ma useState
//render sparisce, serve solo con le classi, anche la keyword this non serve


const App = () => {

  const [selectedAsin, setSelectedAsin] = useState(undefined)

  const getSingleAsin = (singleAsin) => {
    setSelectedAsin(singleAsin)
  }

  return(
    <Container>
    <MyNav />
    <MyJumbotron />
    <Row>
      <Col>
        <BookList books={fantasy} getSingleAsin={getSingleAsin} />
      </Col>
      <Col>
        <CommentArea asin={selectedAsin}/>
      </Col>
    </Row>
    <MyFooter />
  </Container>
  )
}

export default App
