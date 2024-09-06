import { Button, Container, Row } from 'react-bootstrap'
import ContentCard from './Card'
import { useState } from 'react';

export default function Filter(props) {
  const [data, setData] = useState(props.data);
  const filterFunction = (key) => {
    key === true  ?setData(props.data) : setData(props.data.filter((item) => item.type === key))
    return null
  }
  
  return (
    <div>
        <Container>
          <div>
            <h2 className='text-center pt-5 fs-1'>All menus</h2>
          </div>
          <div className='d-flex justify-content-center align-items-center gap-4'>
            <Button className='filter-btn fs-4' onClick={() => filterFunction(true)}>All</Button>
            <Button className='filter-btn fs-4' onClick={() => filterFunction("pizza")}>pizza</Button>
            <Button className='filter-btn fs-4' onClick={() => filterFunction("pasta")}>pasta</Button>
          </div>
          <Row xs={ 1 } md={ 2 } lg={ 4 } className="g-4 py-4">
                    <ContentCard data={ data } />
            </ Row>
        </Container>
    </div>
  )
}